var ews = require('ews-javascript-api');
ews.EwsLogging.DebugLogEnabled = false;

var args = process.argv.slice(2);
var messages = [];
var IDs = [];
var data = "";

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    var chunk = process.stdin.read();

    if (chunk !== null)
        data += chunk;
});

process.stdin.on('end', () => {
	var [authData_base64, IDs_base64, messages_base64] = data.split('\n');
    var [ URL,
          username,
          password,
          authType,
          TLS ] = Buffer.from(authData_base64, "base64").toString("utf-8").split('\n');
    var IDsArray = (IDs_base64 == "") ? [] : Buffer.from(IDs_base64, "base64").toString("utf-8").split('\n');
    var messagesArray = (messages_base64 == "") ? [] : Buffer.from(messages_base64, "base64").toString("utf-8").split('\n');

    if ( TLS == "false" )
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    for ( var i = 0; i < IDsArray.length; i++ )
        IDs.push(new ews.ItemId(IDsArray[i]));

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

        for ( var i = 0; i < messagesArray.length; i += 2 )
	    {
	    	var message = new ews.EmailMessage(exch);
			var mimeContent = new ews.MimeContent();
			var bccRecipients = (messagesArray[i] == "") ? [] : messagesArray[i].split(',');
			mimeContent.Content = messagesArray[i+1];
			message.MimeContent = mimeContent;

			for ( var j = 0; j < bccRecipients.length; j++ )
				message.BccRecipients.Add(bccRecipients[j]);

			messages.push(message);
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

	// d.run(function () {
	// 	var Promise = require('bluebird');
	// 	Promise.reduce(messages, function (totalNotUsed, resp) {
	// 		// first send all local messages
	// 		return resp.SendAndSaveCopy().then(function () {
	// 			return null;
	// 		}, function (error) {
	// 			process.stdout.write("ERROR");
	// 			process.exit(1);
	// 		});
	// 	}, null).then(function (totalNotUsed) {
	// 		// done sending local messages
	// 		exch.BindToItems(IDs, new ews.PropertySet(ews.BasePropertySet.IdOnly)).then(function (response) {
	// 			Promise.reduce(response.Responses, function (totalNotUsed, resp) {
	// 				// second send messages stored on server
	// 				return resp.Item.Load(new ews.PropertySet(ews.BasePropertySet.IdOnly,
	// 					                  [ews.EmailMessageSchema.MimeContent])).then(function () {
	// 					resp.Item.SendAndSaveCopy().then(function () {

	// 					}, function (error) {
	// 						process.stdout.write("ERROR");
	// 						process.exit(1);
	// 					});

	// 					return null;
	// 				});
	// 			}, null).then(function (totalNotUsed) {
	// 				// done sending server messages
	// 			});
	// 		}, function (error) {
	// 			process.stdout.write("ERROR");
	// 			process.exit(1);
	// 		});
	// 	});
	// });

	d.run(function () {
		for ( var i = 0; i < messages.length; i++ )
		{
			messages[i].SendAndSaveCopy().then(function () {

			}, function (error) {
				process.stdout.write("ERROR");
				process.exit(1);
			});
		}

        for ( var i = 0; i < IDs.length; i++ )
		{
			ews.EmailMessage.Bind(exch, IDs[i], new ews.PropertySet(ews.BasePropertySet.IdOnly,
							                    [ews.EmailMessageSchema.MimeContent])).then(function (response) {
				response.SendAndSaveCopy().then(function () {

				}, function (error) {
					process.stdout.write("ERROR");
					process.exit(1);
				});
			}, function (error) {
				process.stdout.write("ERROR");
				process.exit(1);
			});
		}
    });
});