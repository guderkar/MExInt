var ews = require('ews-javascript-api');
ews.EwsLogging.DebugLogEnabled = false;

var args = process.argv.slice(2);
var flag = args[0];
var folder;
var data = "";

if ( flag == "inbox" )
	folder = ews.WellKnownFolderName.Inbox;
else if ( flag == "drafts" )
	folder = ews.WellKnownFolderName.Drafts;
else if ( flag == "sent" )
	folder = ews.WellKnownFolderName.SentItems;
else if ( flag == "junk" )
	folder = ews.WellKnownFolderName.JunkEmail;
else if ( flag == "trash" )
	folder = ews.WellKnownFolderName.DeletedItems;
else if ( flag == "outbox" )
	folder = ews.WellKnownFolderName.Outbox;

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    var chunk = process.stdin.read();

    if (chunk !== null)
        data += chunk;
});

process.stdin.on('end', () => {
    var authData_base64 = data;
    var [ URL,
          username,
          password,
          authType,
          TLS ] = Buffer.from(authData_base64, "base64").toString("utf-8").split('\n');

    if ( TLS == "false" )
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

	try
	{
		var exch = new ews.ExchangeService(ews.ExchangeVersion.Exchange2007_SP1);
		exch.Url = new ews.Uri(URL);

		if ( authType == "Basic" )
		{
			exch.Credentials = new ews.ExchangeCredentials(username, password);
		}
		else if ( authType == "NTLM" )
		{
			exch.Credentials = new ews.ExchangeCredentials("xxx", "xxx");
			var ntlmXHR = require("./ntlmXHRApi");
			var ntlmXHRApi = new ntlmXHR.ntlmXHRApi(username, password);
			exch.XHRApi = ntlmXHRApi;
		}
	}
	catch (ex)
	{
		process.stdout.write("ERROR");
		process.exit(1);
	}

	var d = require('domain').create()
	d.on('error', function (error) {
		process.stdout.write("ERROR");
		process.exit(1);
	});

	d.run(function () {
		var view = new ews.ItemView();
		view.PropertySet = new ews.PropertySet(ews.BasePropertySet.IdOnly)
		var items = exch.FindItems(folder, view);
		items.then(function (response) {
		    for (var item of response.Items)
		        process.stdout.write(item.Id.UniqueId + '\n');
		}, function (error) {
		    process.stdout.write("ERROR");
		    process.exit(1);
		});
	});
});