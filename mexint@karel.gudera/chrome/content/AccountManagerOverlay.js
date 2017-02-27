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
	var accountActionsDropdownElement = document.getElementById("accountActionsDropdown");
	var removeAccountElement = document.getElementById("accountActionsDropdownRemove");
	var removeAccountOCAttr = removeAccountElement.getAttribute("oncommand");

	accountActionsDropdownElement.addEventListener("popupshown", function (event) { 
		var accountTree = document.getElementById("accounttree");
		var selection = accountTree.view.selection;
		var xulTreeObject = accountTree.contentView.getItemAtIndex(selection.currentIndex);
		var server = xulTreeObject._account.incomingServer;

		if ( server.getBoolValue("mexint") == true )
		{
			removeAccountElement.setAttribute("oncommand", null);
		}
		else
		{
			removeAccountElement.setAttribute("oncommand", removeAccountOCAttr);
		}
		
	}, false);

	removeAccountElement.addEventListener("command", function (event) { 
		var accountTree = document.getElementById("accounttree");
		var selection = accountTree.view.selection;
		var xulTreeObject = accountTree.contentView.getItemAtIndex(selection.currentIndex);
		var account = xulTreeObject._account;
		var server = account.incomingServer;
		var username = server.realUsername;

		if ( server.getBoolValue("mexint") == true )
		{
			eval(removeAccountOCAttr);

			if ( ! accountStillExists(account) )
				removeLoginManagerInfo(username);
		}

	}, false);
}

window.addEventListener("load", function (event) { mexint_onLoad(event); }, false);