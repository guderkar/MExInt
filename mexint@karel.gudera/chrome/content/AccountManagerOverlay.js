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

function mexint_onLoad (event)
{
	onRemoveAccountOrig = onRemoveAccount;

	// override original function
	onRemoveAccount = function (event) 
	{
		var account = currentAccount;
		var server = account.incomingServer;
		var username = server.realUsername;
		var isMexint = server.getBoolValue("mexint");

		onRemoveAccountOrig(event);
		
		if ( isMexint && ! accountStillExists(account) )
			removeLoginManagerInfo(username);
	}
}

window.addEventListener("load", function (event) { mexint_onLoad(event); }, false);