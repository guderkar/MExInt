const { require } = Components.utils.import('resource://gre/modules/commonjs/toolkit/require.js', {});
const subprocess = require('sdk/system/child_process/subprocess');
const base64 = require('sdk/base64');
Components.utils.import('resource://gre/modules/FileUtils.jsm');

var OS = Components.classes["@mozilla.org/xre/app-info;1"]
         .getService(Components.interfaces.nsIXULRuntime).OS;
var node = (OS == "WINNT") ? "node.exe" : "node";
var nodePath = FileUtils.getFile("ProfD", ["extensions", "mexint@karel.gudera", "components", node]);
var getMsgPath = FileUtils.getFile("ProfD", ["extensions", "mexint@karel.gudera", "server", "get_messages.js"]);
var getHdrPath = FileUtils.getFile("ProfD", ["extensions", "mexint@karel.gudera", "server", "get_headers.js"]);
var delMsgPath = FileUtils.getFile("ProfD", ["extensions", "mexint@karel.gudera", "server", "delete_messages.js"]);
var sendUnsentMsgsPath = FileUtils.getFile("ProfD", ["extensions", "mexint@karel.gudera", "server", "send_unsent_messages.js"]);

function showNotification (notificationMessage)
{
	let gActivityManager = Components.classes["@mozilla.org/activity-manager;1"]
	                       .getService(Components.interfaces.nsIActivityManager);                       
	let event = Components.classes["@mozilla.org/activity-event;1"]
	            .createInstance(Components.interfaces.nsIActivityEvent);

	event.init(notificationMessage,
               null, 
               "", 
               Date.now(),
               Date.now());
	             
	gActivityManager.addActivity(event);
	gActivityManager.removeActivity(event.id);
}

function saveMessage (message_base64, server, folder)
{
	var tmp = atob(message_base64);
	var lfIndex = tmp.indexOf('\n');
	var UniqueId = tmp.slice(0, lfIndex);
	var messageSource = tmp.slice(lfIndex + 1);
	folder.QueryInterface(Components.interfaces.nsIMsgLocalMailFolder);
	var message = folder.addMessage(messageSource);
	message.messageId = UniqueId;
}

function fetchMessages (IDs, server, folder, URL, username, password, authType, TLS)
{
	var exitCode;
	var stdout = "";
	var stderr;
	var msgCnt = 0;
	var IDsStr = "";
	var flag;

	for ( var i = 0; i < IDs.length; i++ )
		(i == IDs.length - 1) ? IDsStr += IDs[i] : IDsStr += IDs[i] + '\n';

	let authData_base64 = base64.encode(URL      + '\n' +
		                                username + '\n' + 
		                                password + '\n' +
		                                authType + '\n' +
		                                TLS,
		                                "utf-8");

	let IDs_base64 = base64.encode(IDsStr, "utf-8");

	var p = subprocess.call({
		command: nodePath.path,
		arguments: [getMsgPath.path],
		//environment: [],
		charset: "UTF-8",
		//workdir: "",

		stdin: function (stdin) {
			stdin.write(authData_base64 + '\n' + IDs_base64);
			stdin.close();
		},

		stdout: function (data) {
			var lfIndex = data.indexOf('\n');

			if ( lfIndex > -1 )
			{
				showNotification(folder.prettiestName + " - " + server.prettyName + ": Downloading message " + (++msgCnt) + " of " + IDs.length + "...");
				var message = stdout + data.slice(0, lfIndex);
				stdout = data.slice(lfIndex + 1);
				saveMessage(message, server, folder);
			}
			else
			{
				stdout += data;
			}
		},

		done: function (result) {
			exitCode = result.exitCode;
			stderr = result.stderr;
			server.setBoolValue("locked", false);
			showNotification(folder.prettiestName + " - " + server.prettyName + ": Received " + IDs.length + " of " + IDs.length + " message(s)");
		},

		mergeStderr: false
	});
}

function deleteMsgDBHdrs (msgDBHdrs, folder)
{
	Components.utils.import("resource:///modules/iteratorUtils.jsm");
	let xpcomHdrArray = toXPCOMArray(msgDBHdrs, Components.interfaces.nsIMutableArray);
	folder.deleteMessages(xpcomHdrArray, null, true, false, null, false);
}

function parseHeaders (headers, server, folder, URL, username, password, authType, TLS)
{
	var headers = headers.split('\n');
	headers.pop(); // last '\n' causes extra empty string
	var serverHeaders = [];
	var localHeaders = [];
	var localMsgDBHdrs = [];

	Components.utils.import("resource:///modules/iteratorUtils.jsm");

	// server headers
	for (let i = 0; i < headers.length; i++)
	{
		serverHeaders.push(headers[i]);
	}

	// local headers
	for (let msgHdr in fixIterator(folder.messages, Components.interfaces.nsIMsgDBHdr)) 
	{
		localHeaders.push(msgHdr.messageId);
		localMsgDBHdrs.push(msgHdr);
	}

	var serverHdrNum = serverHeaders.length;
	var localHdrNum = localHeaders.length;
	var toFetch = [];
	var toDelete = [];

	for (let i = 0; i < serverHdrNum; i++)
	{
		if ( ! (localHeaders.indexOf(serverHeaders[i]) > -1) ) // hdr not yet in mailbox => fetch it
			toFetch.push(serverHeaders[i]);
	}

	for (let i = 0; i < localHdrNum; i++)
	{
		if ( ! (serverHeaders.indexOf(localHeaders[i]) > -1) && localMsgDBHdrs[i].getProperty("local") != "true" ) // local hdr not in server headers => delete it
			toDelete.push(localMsgDBHdrs[i]);
	}

	if ( toDelete.length > 0 )
	{
		deleteMsgDBHdrs(toDelete, folder);
	}

	if ( toFetch.length > 0 )
	{
		showNotification(folder.prettiestName + " - " + server.prettyName + ": Found " + toFetch.length + " message(s) to download");
		fetchMessages(toFetch, server, folder, URL, username, password, authType, TLS);
	}
	else
	{
		server.setBoolValue("locked", false);
		showNotification(folder.prettiestName + " - " + server.prettyName + ": No messages to download");
	}
}

function getHeaders (server, folder, URL, username, password, authType, TLS)
{
	var exitCode;
	var stdout;
	var stderr;
	var flag;

	if ( folder.getFlag(Components.interfaces.nsMsgFolderFlags.Inbox) )
		flag = "inbox";
	else if ( folder.getFlag(Components.interfaces.nsMsgFolderFlags.Drafts) )
		flag = "drafts";
	else if ( folder.getFlag(Components.interfaces.nsMsgFolderFlags.SentMail) )
		flag = "sent";
	else if ( folder.getFlag(Components.interfaces.nsMsgFolderFlags.Junk) )
		flag = "junk";
	else if ( folder.getFlag(Components.interfaces.nsMsgFolderFlags.Trash) )
		flag = "trash";
	else if ( folder.getFlag(Components.interfaces.nsMsgFolderFlags.Queue) )
		flag = "outbox";
	else
	{
		flag = "xxx" // TODO: folder UniqueId in the future
		server.setBoolValue("locked", false);
		showNotification(folder.prettiestName + " - " + server.prettyName + ": This folder is not supported");
		return;
	}

	let authData_base64 = base64.encode(URL      + '\n' +
		                                username + '\n' + 
		                                password + '\n' +
		                                authType + '\n' +
		                                TLS,
		                                "utf-8");

	var p = subprocess.call({
		command: nodePath.path,
		arguments: [getHdrPath.path, flag],
		//environment: [],
		charset: "UTF-8",
		//workdir: "",

		stdin: function (stdin) {
			stdin.write(authData_base64);
			stdin.close();
		},

		done: function (result) {
			exitCode = result.exitCode;
			stdout = result.stdout;
			stderr = result.stderr;

			if ( stdout == "ERROR" )
			{
				server.setBoolValue("locked", false);
				showNotification(server.prettyName + ": Error connecting to Exchange server");
				return;
			}

			parseHeaders(stdout, server, folder, URL, username, password, authType, TLS);
		},

		mergeStderr: false
	});
}

function getMessages (server, folder)
{
	if ( server.getBoolValue("locked") )
		return;

	server.setBoolValue("locked", true);
	showNotification(folder.prettiestName + " - " + server.prettyName + ": Checking for new messages...");

	var URL = server.getCharValue("ewsURL");
	var username = server.username;
	var password;
	var authType = server.getCharValue("authType");
	var TLS = server.getCharValue("TLS");

	var passwordManager = Components.classes["@mozilla.org/login-manager;1"]
                          .getService(Components.interfaces.nsILoginManager);

    var nsLoginInfo = new Components.Constructor("@mozilla.org/login-manager/loginInfo;1",
    	                                         Components.interfaces.nsILoginInfo,
    	                                         "init");

    var logins = passwordManager.findLogins({}, 'chrome://mexint', null, 'User Registration');
      
	for ( var i = 0; i < logins.length; i++ )
	{
		if ( logins[i].username == username )
		{
			password = logins[i].password;
			break;
		}
	}

	getHeaders(server, folder, URL, username, password, authType, TLS);
}

function deleteMessages (server, folder)
{
	var msgDBHdrs = gFolderDisplay.selectedMessages;

	if ( ! msgDBHdrs || msgDBHdrs.length <= 0 )
		return;

	if ( server.getBoolValue("locked") )
		return;

	server.setBoolValue("locked", true);
	showNotification(folder.prettiestName + " - " + server.prettyName + ": Deleting " + msgDBHdrs.length + " message(s)...");

	var URL = server.getCharValue("ewsURL");
	var username = server.username;
	var password;
	var authType = server.getCharValue("authType");
	var TLS = server.getCharValue("TLS");

	var passwordManager = Components.classes["@mozilla.org/login-manager;1"]
                          .getService(Components.interfaces.nsILoginManager);

    var nsLoginInfo = new Components.Constructor("@mozilla.org/login-manager/loginInfo;1",
    	                                         Components.interfaces.nsILoginInfo,
    	                                         "init");

    var logins = passwordManager.findLogins({}, 'chrome://mexint', null, 'User Registration');
      
	for ( var i = 0; i < logins.length; i++ )
	{
		if ( logins[i].username == username )
		{
			password = logins[i].password;
			break;
		}
	}

	var exitCode;
	var stdout;
	var stderr;
	var IDsStr = "";
	var hardDelete = (folder.getFlag(Components.interfaces.nsMsgFolderFlags.Trash)) ? "true" : "false";

	for ( var i = 0; i < msgDBHdrs.length; i++ )
		(i == msgDBHdrs.length - 1) ? IDsStr += msgDBHdrs[i].messageId : IDsStr += msgDBHdrs[i].messageId + '\n';

	let authData_base64 = base64.encode(URL      + '\n' +
		                                username + '\n' + 
		                                password + '\n' +
		                                authType + '\n' +
		                                TLS,
		                                "utf-8");

	let IDs_base64 = base64.encode(IDsStr, "utf-8");

	var p = subprocess.call({
		command: nodePath.path,
		arguments: [delMsgPath.path, hardDelete],
		//environment: [],
		charset: "UTF-8",
		//workdir: "",

		stdin: function (stdin) {
			stdin.write(authData_base64 + '\n' + IDs_base64);
			stdin.close();
		},

		done: function (result) {
			exitCode = result.exitCode;
			stdout = result.stdout;
			stderr = result.stderr;

			if ( stdout == "ERROR" )
			{
				server.setBoolValue("locked", false);
				showNotification(server.prettyName + ": Error connecting to Exchange server");
				return;
			}

			deleteMsgDBHdrs(msgDBHdrs, folder);
			server.setBoolValue("locked", false);
			showNotification(folder.prettiestName + " - " + server.prettyName + ": Deleted " + msgDBHdrs.length + " message(s)");
		},

		mergeStderr: false
	});
}

function sendUnsendMsgs (server, folder)
{
	var msgDBHdrs = [];

	if ( server.getBoolValue("locked") )
		return;

	server.setBoolValue("locked", true);

	for (let msgHdr in fixIterator(folder.messages, Components.interfaces.nsIMsgDBHdr)) 
		msgDBHdrs.push(msgHdr);

	showNotification(folder.prettiestName + " - " + server.prettyName + ": Sending " + msgDBHdrs.length + " unsent message(s)...");

	var URL = server.getCharValue("ewsURL");
	var username = server.username;
	var password;
	var authType = server.getCharValue("authType");
	var TLS = server.getCharValue("TLS");

	var passwordManager = Components.classes["@mozilla.org/login-manager;1"]
                          .getService(Components.interfaces.nsILoginManager);

    var nsLoginInfo = new Components.Constructor("@mozilla.org/login-manager/loginInfo;1",
    	                                         Components.interfaces.nsILoginInfo,
    	                                         "init");

    var logins = passwordManager.findLogins({}, 'chrome://mexint', null, 'User Registration');
      
	for ( var i = 0; i < logins.length; i++ )
	{
		if ( logins[i].username == username )
		{
			password = logins[i].password;
			break;
		}
	}

	var localMessages = [];
	var remoteMessages = [];
	var IDsStr = "";
	var messages = "";

	for ( var i = 0; i < msgDBHdrs.length; i++ )
	{
		if ( msgDBHdrs[i].getProperty("local") != "true" )
			remoteMessages.push(msgDBHdrs[i]);
	}

	for ( var i = 0; i < msgDBHdrs.length; i++ )
	{
		if ( msgDBHdrs[i].getProperty("local") == "true" )
			localMessages.push(msgDBHdrs[i]);
	}

	for ( var i = 0; i < remoteMessages.length; i++ )
	{
		if ( i == remoteMessages.length -1 )
			IDsStr += remoteMessages[i].messageId;
		else
			IDsStr += remoteMessages[i].messageId + '\n';
	}

	for ( var i = 0; i < localMessages.length; i++ )
	{
		if ( i == localMessages.length -1 )
			messages += localMessages[i].getProperty("bcc") + '\n' + localMessages[i].getProperty("mime_base64");
		else
			messages += localMessages[i].getProperty("bcc") + '\n' + localMessages[i].getProperty("mime_base64") + '\n';
	}
	
	let authData_base64 = base64.encode(URL      + '\n' +
                                        username + '\n' + 
                                        password + '\n' +
                                        authType + '\n' +
                                        TLS,
                                        "utf-8");

	let IDs_base64 = base64.encode(IDsStr, "utf-8");

	let messages_base64 = base64.encode(messages, "utf-8");

	var p = subprocess.call({
		command: nodePath.path,
		arguments: [sendUnsentMsgsPath.path],
		//environment: [],
		charset: "UTF-8",
		//workdir: "",

		stdin: function (stdin) {
			stdin.write(authData_base64 + '\n' + IDs_base64 + '\n' + messages_base64);
			stdin.close();
		},

		done: function (result) {
			exitCode = result.exitCode;
			stdout = result.stdout;
			stderr = result.stderr;

			if ( stdout == "ERROR" )
			{
				server.setBoolValue("locked", false);
				showNotification(server.prettyName + ": Error connecting to Exchange server");
				return;
			}

			deleteMsgDBHdrs(msgDBHdrs, folder);
			server.setBoolValue("locked", false);
			showNotification(folder.prettiestName + " - " + server.prettyName + ": Done sending " + msgDBHdrs.length + " unsent message(s)");
		},

		mergeStderr: false
	});
}

function mexint_onLoad (event)
{
	// unlock all exchange incoming server locks and check for new messages in inbox
	var accountManager = Components.classes["@mozilla.org/messenger/account-manager;1"]
                         .getService(Components.interfaces.nsIMsgAccountManager);

	var accounts = accountManager.accounts;

	for ( var i = 0; i < accounts.length; i++ )
	{
		var account = accounts.queryElementAt(i, Components.interfaces.nsIMsgAccount);
		var server = account.incomingServer;

		if ( server.getBoolValue("mexint") )
		{
			server.setBoolValue("locked", false);
			getMessages(server, server.rootFolder.getFolderWithFlags(Components.interfaces.nsMsgFolderFlags.Inbox));
		}
	}

	// override original function
	var GetNewMsgs_orig = GetNewMsgs;
	GetNewMsgs = function (server, folder)
	{
		if ( server.getBoolValue("mexint") )
		{
			var auxFolder = folder.isServer ? server.rootFolder.getFolderWithFlags(Components.interfaces.nsMsgFolderFlags.Inbox) : folder;
			getMessages(server, auxFolder);
			return;
		}

		GetNewMsgs_orig(server, folder);
	}

	// override original function
	GetMessagesForAllAuthenticatedAccounts = function ()
	{
	  // now log into any server
	  try
	  {
	    var allServers = accountManager.allServers;
	    // array of isupportsarrays of servers for a particular folder
	    var pop3DownloadServersArray = [];
	    // parallel array of folders to download to...
	    var localFoldersToDownloadTo = [];
	    var pop3Server;

	    for (var i = 0; i < allServers.length; ++i)
	    {
	      var currentServer = allServers.queryElementAt(i, Components.interfaces.nsIMsgIncomingServer);

	      // START MY CODE
	      if ( currentServer.getBoolValue("mexint") )
	      {
	      	var folder = currentServer.rootFolder.getFolderWithFlags(Components.interfaces.nsMsgFolderFlags.Inbox);
	        getMessages(currentServer, folder);
	        continue;
	      }
	      // END MY CODE

	      if (currentServer.protocolInfo.canGetMessages &&
	          !currentServer.passwordPromptRequired)
	      {
	        if (currentServer.type == "pop3")
	        {
	          CoalesceGetMsgsForPop3ServersByDestFolder(currentServer,
	            pop3DownloadServersArray, localFoldersToDownloadTo);
	          pop3Server = currentServer.QueryInterface(Components.interfaces.nsIPop3IncomingServer);
	        }
	        else
	        // get new messages on the server for imap or rss
	          GetMessagesForInboxOnServer(currentServer);
	      }
	    }
	    for (var i = 0; i < pop3DownloadServersArray.length; ++i)
	    {
	      // any ol' pop3Server will do - the serversArray specifies which servers to download from
	      pop3Server.downloadMailFromServers(pop3DownloadServersArray[i],
	                                         pop3DownloadServersArray[i].length,
	                                         msgWindow,
	                                         localFoldersToDownloadTo[i],
	                                         null);
	    }
	  }
	  catch(ex)
	  {
	      dump(ex + "\n");
	  }
	}

	// override original function
	var gFolderDisplay_doCommand_orig = gFolderDisplay.doCommand;
	gFolderDisplay.doCommand = function (msgViewCommandType)
	{
		var folder = GetFirstSelectedMsgFolder();
		var server = folder.server;

		if ( server.getBoolValue("mexint") &&
			 (msgViewCommandType == nsMsgViewCommandType.deleteMsg || 
			  msgViewCommandType == nsMsgViewCommandType.deleteNoTrash) )
		{
			deleteMessages(server, folder);
			return;
		}

		gFolderDisplay_doCommand_orig(msgViewCommandType);
	}

	// override original function
	var IsSendUnsentMsgsEnabled_orig = IsSendUnsentMsgsEnabled;
	IsSendUnsentMsgsEnabled = function (unsentMsgsFolder)
	{
		var folder = gFolderTreeView.getSelectedFolders()[0];

		if ( folder.server.getBoolValue("mexint") &&
			 folder.getFolderWithFlags(Components.interfaces.nsMsgFolderFlags.Queue) &&
			 folder.getTotalMessages(false) > 0 )
			return true;

		return IsSendUnsentMsgsEnabled_orig(unsentMsgsFolder);
	}

	// override original function
	var SendUnsentMessages_orig = SendUnsentMessages;
	SendUnsentMessages = function ()
	{
		var folder = gFolderTreeView.getSelectedFolders()[0];
		var server = folder.server;

		if ( server.getBoolValue("mexint") && folder.getFolderWithFlags(Components.interfaces.nsMsgFolderFlags.Queue) )
		{
			sendUnsendMsgs(server, folder);
			return;
		}

		SendUnsentMessages_orig();
	}

	// override original function
	var SendMDNResponse_orig = SendMDNResponse;
	SendMDNResponse = function ()
	{
		if ( gFolderDisplay.displayedFolder.server.getBoolValue("mexint") )
		{
			alert("SendMDNResponse is not implemented yet");
			return;
		}

		SendMDNResponse_orig();
	}

	// handle opening folder event
	window.document.getElementById('folderTree').addEventListener("select", function () {
		if ( ! gFolderDisplay.displayedFolder.isServer && gFolderDisplay.displayedFolder.server.getBoolValue("mexint") )
			getMessages(gFolderDisplay.displayedFolder.server, gFolderDisplay.displayedFolder);
	}, false);
}

window.addEventListener("load", function (event) { mexint_onLoad(event); }, false);