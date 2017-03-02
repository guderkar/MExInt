var ews = require('ews-javascript-api');
ews.EwsLogging.DebugLogEnabled = false;

var args = process.argv.slice(2);
var bccRecipients = (args[0] == "") ? [] : args[0].split(',');
var data = "";

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
	var chunk = process.stdin.read();

	if (chunk !== null)
		data += chunk;
});

process.stdin.on('end', () => {
	var [authData_base64, msgBody_base64, mime_base64] = data.split('\n');
	var [ URL,
		  username,
		  password,
		  authType,
		  TLS ] = Buffer.from(authData_base64, "base64").toString("utf-8").split('\n');

	if ( TLS == "false" )
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

	var d = require('domain').create()
	d.on('error', function (error) {
	    process.stdout.write("ERROR");
	    process.exit(1);
	});

	d.run(function () {
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

		var escapeHTML = require('escape-html');
		var message = new ews.EmailMessage(exch);
		var mimeContent = new ews.MimeContent();
		mimeContent.Content = mime_base64;
		message.MimeContent = mimeContent;
		message.Body = new ews.MessageBody(ews.BodyType.HTML, escapeHTML(Buffer.from(msgBody_base64, "base64").toString("utf-8")));

		for ( var i = 0; i < bccRecipients.length; i++ )
			message.BccRecipients.Add(bccRecipients[i]);

		message.SendAndSaveCopy().then(function (result) {

		}, function (error) {
			process.stdout.write("ERROR");
			process.exit(1);
		});
	});
});