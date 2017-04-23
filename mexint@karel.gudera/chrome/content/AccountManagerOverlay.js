function removeLoginManagerInfo (username)
{
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
			passwordManager.removeLogin(logins[i]);
			break;
		}
	}
}

function accountStillExists (account)
{
	var accountManager = Components.classes["@mozilla.org/messenger/account-manager;1"]
                         .getService(Components.interfaces.nsIMsgAccountManager);
    var accounts = accountManager.accounts;

    for ( var i = 0; i < accounts.length; i++ )
    {
    	var acc = accounts.queryElementAt(i, Components.interfaces.nsIMsgAccount);
    	
    	if ( acc.key == account.key )
    		return true;
    }

    return false;
}

function overrideAccountManager ()
{
	// override original function
	gAccountTree._build_orig = gAccountTree._build;
    gAccountTree._build = function ()
    {
		gAccountTree._build_orig();

		var mainTreeChildren = document.getElementById("account-tree-children").childNodes;

		for ( var i = 0; i < mainTreeChildren.length; i++ )
		{
		    var node = mainTreeChildren[i];

		    try 
		    {
				if ( node._account && node._account.incomingServer.getBoolValue("mexint") )
				{
				    var treeChildrenNode = node.getElementsByTagName("treechildren")[0];
				    var nodeChildren = treeChildrenNode.childNodes;
				    var ewsServerNode = null;

				    for ( var j = nodeChildren.length - 1; j >= 0; j-- )
				    {
						var row = nodeChildren[j];
						var pageTag = row.getAttribute("PageTag");

						if ( pageTag == "am-server.xul" )
						{
						    row.setAttribute("PageTag", "chrome://mexint/content/am-ewsServer.xul");
						}

						if ( pageTag == "am-offline.xul" ||
						     pageTag == "am-junk.xul"    ||
						     pageTag == "am-mdn.xul"     ||
						     pageTag == "am-smime.xul"   ||
						     pageTag == "am-copies.xul"/*||
						     pageTag == "am-addressing.xul"*/ )
						{
						    treeChildrenNode.removeChild(row);
						}
				    }
				}
		    }
		    catch (ex)
		    {
				Components.utils.reportError(ex);
		    }
		}
    }

    gAccountTree._build();
}

function mexint_onLoad (event)
{
	// override original function
	var onRemoveAccount_orig = onRemoveAccount;
	onRemoveAccount = function (event) 
	{
		var account = currentAccount;
		var server = account.incomingServer;
		var username = server.realUsername;
		var isMexint = server.getBoolValue("mexint");

		onRemoveAccount_orig(event);
		
		if ( isMexint && ! accountStillExists(account) )
			removeLoginManagerInfo(username);
	}

	// override account manager
	overrideAccountManager();
}

window.addEventListener("load", function (event) { mexint_onLoad(event); }, false);