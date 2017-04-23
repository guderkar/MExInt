Components.utils.import('resource://mexint/subprocess.jsm');
Components.utils.import('resource://gre/modules/FileUtils.jsm');

var platform = Components.classes["@mozilla.org/xre/app-info;1"]
               .getService(Components.interfaces.nsIXULRuntime).OS;
var node = (platform == "WINNT") ? "node.exe" : "node";
var nodePath = FileUtils.getFile("ProfD", ["extensions", "mexint@karel.gudera", "components", node]);
var authPath = FileUtils.getFile("ProfD", ["extensions", "mexint@karel.gudera", "server", "authentication.js"]);

var preventDefaultListener = function (event)
{
	event.preventDefault();
	event.stopPropagation();
};

function disableWindow ()
{
	var addAccountButton = document.getElementById("addAccountButton");
	var cancelButton = document.getElementById("cancelButton");
	window.setCursor("wait");
	window.addEventListener("close", preventDefaultListener, false);
	addAccountButton.disabled = true;
	cancelButton.disabled = true;
}

function enableWindow ()
{
	var addAccountButton = document.getElementById("addAccountButton");
	var cancelButton = document.getElementById("cancelButton");
	window.setCursor("auto");
	window.removeEventListener("close", preventDefaultListener, false);
	addAccountButton.disabled = false;
	cancelButton.disabled = false;
}

function addAccount ()
{
	var name = document.getElementById("name").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var URL = document.getElementById("URL").value;
	var authType = document.getElementById("authType").value;
	var TLS = document.getElementById("TLS").checked.toString();
	var domain = URL.replace(/(.*https?:\/\/)(.*?)(\/.*)/, "$2");
	var email;

	var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);

	if ( name == "" ||
	     username == "" ||
	     password == "" ||
	     URL == "" )
	{
		promptService.alert(window, "Error", "Please fill out all of the required fields");
		return;
	}

	disableWindow();

	var exitCode;
	var stdout;
	var stderr;

	let authData_base64 = btoa(URL      + '\n' +
		                       username + '\n' + 
		                       password + '\n' +
		                       authType + '\n' +
		                       TLS);

	var p = subprocess.call({
		command: nodePath.path,
		arguments: [authPath.path],
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
		},

		mergeStderr: false
	});
	p.wait();
    
	if ( stdout.substring(0, 2) != "OK" )
	{
		Components.utils.reportError("mexint - node\n\n" +
			                         "stdout:\n" +
			                         stdout + "\n\n" +
			                         "stderr:\n" +
			                         stderr);
		promptService.alert(window, "Error", "Failed to add account\n\n" + 
			                                 "If you feel like you should not experience this issuse please open\n" +
			                                 "the error console (CTRL + SHIFT + J), filter mexint and report the\n" +
			                                 "error to Issues on 'www.github.com/guderkar/mexint' or send it to\n"  +
			                                 "'guderkar@fit.cvut.cz'. Thank you.");
		enableWindow();
		return;
	}

	email = stdout.split('\n')[1];

	var accountManager = Components.classes["@mozilla.org/messenger/account-manager;1"]
                         .getService(Components.interfaces.nsIMsgAccountManager);
    var passwordManager = Components.classes["@mozilla.org/login-manager;1"]
                          .getService(Components.interfaces.nsILoginManager);

    var accounts = accountManager.accounts;

    // check if account already exists
    for ( var i = 0; i < accounts.length; i++ )
    {
    	var acc = accounts.queryElementAt(i, Components.interfaces.nsIMsgAccount);
    	var srv = acc.incomingServer;

    	if ( srv.username == username && srv.hostName == domain )
    	{
    		promptService.alert(window, "Error", "Account already exists");
    		enableWindow();
    		return;
    	}
    }
    
    var server = accountManager.createIncomingServer(username, domain, "pop3");
    server.prettyName = username;
    server.setDefaultLocalPath(FileUtils.getFile("ProfD", ["MExInt"]));
    server.setCharValue("ewsURL", URL);
    server.setCharValue("authType", authType);
    server.setCharValue("TLS", TLS);
    server.setBoolValue("mexint", true);
    server.setBoolValue("locked", false);
    server.doBiff = false;
    server.port = 65535;

    var identity = accountManager.createIdentity();
    identity.fullName = name;
    identity.email = email;
    identity.archiveEnabled = false;
    identity.smtpServerKey = server.key;

    Components.utils.import("resource://gre/modules/Services.jsm");
	var msgProps = Services.strings.createBundle("chrome://messenger/locale/messenger.properties");
	server.rootFolder.QueryInterface(Components.interfaces.nsIMsgLocalMailFolder);

	var inboxFolder = server.rootFolder.getFolderWithFlags(Components.interfaces.nsMsgFolderFlags.Inbox)
	var trashFolder = server.rootFolder.getFolderWithFlags(Components.interfaces.nsMsgFolderFlags.Trash)

    var draftsFolder = server.rootFolder.createLocalSubfolder("Drafts");
    draftsFolder.setFlag(Components.interfaces.nsMsgFolderFlags.Drafts);
    draftsFolder.prettyName = msgProps.GetStringFromName("draftsFolderName");

    var fccFolder = server.rootFolder.createLocalSubfolder("Sent");
    fccFolder.setFlag(Components.interfaces.nsMsgFolderFlags.SentMail);
    fccFolder.prettyName = msgProps.GetStringFromName("sentFolderName");

    var junkFolder = server.rootFolder.createLocalSubfolder("Junk");
    junkFolder.setFlag(Components.interfaces.nsMsgFolderFlags.Junk);
    junkFolder.prettyName = msgProps.GetStringFromName("junkFolderName");

    var outboxFolder = server.rootFolder.createLocalSubfolder("Unsent Messages");
    outboxFolder.setFlag(Components.interfaces.nsMsgFolderFlags.Queue);
    outboxFolder.prettyName = msgProps.GetStringFromName("outboxFolderName");

    // inboxFolder.setStringProperty("lock", "false");
    // trashFolder.setStringProperty("lock", "false");
    // draftsFolder.setStringProperty("lock", "false");
    // fccFolder.setStringProperty("lock", "false");
    // junkFolder.setStringProperty("lock", "false");
    // outboxFolder.setStringProperty("lock", "false");

    var account = accountManager.createAccount();
    account.incomingServer = server;
    account.addIdentity(identity);

    if ( accounts.length <= 1 )
    	accountManager.defaultAccount = account;

    var nsLoginInfo = new Components.Constructor("@mozilla.org/login-manager/loginInfo;1",
    	                                         Components.interfaces.nsILoginInfo,
    	                                         "init");
    var loginInfo = new nsLoginInfo(
		'chrome://mexint',
		null,
		'User Registration',
		username,
		password,
		'',
		''
	);

    try
    {	
		passwordManager.addLogin(loginInfo);
    }
    catch (ex) {}

    promptService.alert(window, "Success", "Account has been added");
	enableWindow();
	window.close();
}