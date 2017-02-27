"use strict";
var DnsClient = (function () {
    function DnsClient() {
    }
    DnsClient.prototype.DnsQuer = function (domain, dnsServerAddress /*System.Net.IPAddress*/) { throw new Error("DnsClient.ts - DnsQuer<T> : Not implemented."); };
    DnsClient.Win32Success = 0;
    return DnsClient;
}());
exports.DnsClient = DnsClient;
//------------modulename->Microsoft.Exchange.WebServices.Dns------------
