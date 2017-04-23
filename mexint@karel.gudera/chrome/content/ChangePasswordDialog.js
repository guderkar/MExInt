var gUsername;

function onLoad ()
{
	gUsername = window.arguments[0].inn.username;
}

function changePassword ()
{
	var oldPassword = document.getElementById("oldPassword").value;
	var newPassword1 = document.getElementById("newPassword1").value;
	var newPassword2 = document.getElementById("newPassword2").value;

	var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);

    if ( newPassword1 != newPassword2 )
    {
        promptService.alert(window, "Error", "Entered passwords don't match");
        return;
    }

    var passwordManager = Components.classes["@mozilla.org/login-manager;1"]
                          .getService(Components.interfaces.nsILoginManager);

    var nsLoginInfo = new Components.Constructor("@mozilla.org/login-manager/loginInfo;1",
                                                 Components.interfaces.nsILoginInfo,
                                                 "init");
    var oldLoginInfo = new nsLoginInfo(
        'chrome://mexint',
        null,
        'User Registration',
        gUsername,
        oldPassword,
        '',
        ''
    );

    var newLoginInfo = new nsLoginInfo(
        'chrome://mexint',
        null,
        'User Registration',
        gUsername,
        newPassword1,
        '',
        ''
    );

    try
    {
        passwordManager.modifyLogin(oldLoginInfo, newLoginInfo);
        promptService.alert(window, "Success", "Password has been successfully changed");
        window.close();
        return;
    }
    catch (ex)
    {
    	promptService.alert(window, "Error", "You have entered wrong password");
    	return;
    }
}