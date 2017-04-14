if ( ! mexint )
	var mexint = {};

function hideUnnecessary (account)
{
	var server = account.incomingServer;
    
	if ( server.getBoolValue("mexint") )
	{
		document.getElementById("identity.organization").parentElement.hidden = true;
		document.getElementById("identity.smtpServerKey").parentElement.hidden = true;
		document.getElementById("identity.manageIdentitiesbutton").parentElement.hidden = true;
	}
	else
	{
		document.getElementById("identity.organization").parentElement.hidden = false;
		document.getElementById("identity.smtpServerKey").parentElement.hidden = false;
		document.getElementById("identity.manageIdentitiesbutton").parentElement.hidden = false;
	}
}

function mexint_onLoad (event)
{
	// override original function
	var onPreInit_orig = onPreInit;
	onPreInit = function (account, accountValues)
	{
		onPreInit_orig(account, accountValues);
		hideUnnecessary(account);
	}

	hideUnnecessary(parent.getCurrentAccount());
}

window.addEventListener("load", function (event) { mexint_onLoad(event); }, false);