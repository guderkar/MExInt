function sleep (milliseconds)
{
    var exec = require('child_process').execSync;
    exec(process.execPath + " -e \"setTimeout(function () { return true; }, " + milliseconds + ");\"");
}

var ews = require('ews-javascript-api');
ews.EwsLogging.DebugLogEnabled = false;

var args = process.argv.slice(2);
var IDs = [];
var data = "";

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    var chunk = process.stdin.read();

    if (chunk !== null)
        data += chunk;
});

process.stdin.on('end', () => {
    var [authData_base64, IDs_base64] = data.split('\n');
    var [ URL,
          username,
          password,
          authType,
          TLS ] = Buffer.from(authData_base64, "base64").toString("utf-8").split('\n');
    var IDsArray = Buffer.from(IDs_base64, "base64").toString("utf-8").split('\n');

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
        var Promise = require('bluebird');
        var items = exch.BindToItems(IDs, new ews.PropertySet(ews.BasePropertySet.IdOnly));
        items.then(function (response) {
            Promise.reduce(response.Responses, function (totalNotUsed, resp) {
                return resp.Item.Load(new ews.PropertySet(ews.BasePropertySet.IdOnly, [ews.EmailMessageSchema.MimeContent,
                                                                                       ews.EmailMessageSchema.IsRead,
                                                                                       ews.EmailMessageSchema.DateTimeReceived])).then(function () {
                    sleep(20);

                    var d = new Date().toString().split(' ');
                    var weekday = d[0];
                    var month = d[1];
                    var day = d[2];
                    var year = d[3];
                    var time = d[4];
                    var date1 = weekday + " " + month + " " + day + " " + time + " " + year;
                    var date2 = resp.Item.DateTimeReceived.Date.format("ddd, D MMM YYYY HH:mm:ss ZZ");
                    var XMozillaStatus = (resp.Item.IsRead ? "0001" : "0000");

                    if ( ! resp.Item.IsRead )
                    {
                        resp.Item.IsRead = true;
                        resp.Item.Update(ews.ConflictResolutionMode.AlwaysOverwrite);
                    }

                    var messageSource = resp.Item.Id.UniqueId + '\n' +
                                        "From - " + date1 + "\r\n" +
                                        "X-Mozilla-Status: " + XMozillaStatus + "\r\n" +
                                        "X-Mozilla-Status2: 00000000\r\n" +
                                        Buffer.from(resp.Item.MimeContent.Content, "base64")
                                        .toString("binary")
                                        .replace(/^Date:.*(\r\n|\r|\n)/mi, "Date: " + date2 + "\r\n");

                    process.stdout.write(Buffer.from(messageSource, "binary").toString("base64") + '\n');
                    
                    return null;
                });
            }, null).then(function (totalNotUsed) {
                // all done
            });
        }, function (error) {
            process.stdout.write("ERROR");
            process.exit(1);
        });
    });
});