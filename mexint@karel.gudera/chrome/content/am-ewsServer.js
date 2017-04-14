if ( ! mexint )
    var mexint = {};

var gServer;
var gEwsUrl;
var gUsername;
var gAuthType;
var gTLS;

function changePassword ()
{
    var params =
    {
                    inn: {
                            username: gServer.realUsername
                    },

                    out: null
    };

    window.openDialog("chrome://mexint/content/ChangePasswordDialog.xul", "",
                      "chrome,dialog,modal,titlebar,centerscreen,resizable=yes", params).focus();
}

function saveChanges ()
{
    gServer.setCharValue("ewsURL", document.getElementById("URL").value);
    gServer.username = document.getElementById("username").value;
    gServer.setCharValue("authType", document.getElementById("authType").value);
    gServer.setCharValue("TLS", document.getElementById("TLS").checked.toString());
}

function onSave ()
{
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);

    if ( gEwsUrl != document.getElementById("URL").value        ||
         gUsername != document.getElementById("username").value ||
         gAuthType != document.getElementById("authType").value ||
         gTLS != document.getElementById("TLS").checked.toString() )
    {
        var res = promptService.confirmEx(window, "Save Changes", "Do you want to save changes you made?",
                                          promptService.BUTTON_TITLE_IS_STRING * promptService.BUTTON_POS_0 +
                                          promptService.BUTTON_TITLE_IS_STRING * promptService.BUTTON_POS_1,
                                          "Yes", "No", null, null, {});

        if ( res == 0 ) // YES
            saveChanges();
    }
}

function onInit (aPageId, aServerId)
{
    document.getElementById("URL").value = gEwsUrl;
    document.getElementById("username").value = gUsername;
    document.getElementById("authType").value = gAuthType;
    document.getElementById("TLS").checked = (gTLS == "true") ? true : false;
}

function onPreInit (account, accountValues)
{
    gServer = account.incomingServer;
    gEwsUrl = gServer.getCharValue("ewsURL");
    gUsername = gServer.username;
    gAuthType = gServer.getCharValue("authType");
    gTLS = gServer.getCharValue("TLS");
}