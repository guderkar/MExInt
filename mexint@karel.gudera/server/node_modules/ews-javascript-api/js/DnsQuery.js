"use strict";
var PromiseFactory_1 = require("./PromiseFactory");
var dns = require("dns");
/**
* DnsQuery: to resolve srv records in nodejs autodiscover call
*/
var DnsQuery = (function () {
    function DnsQuery() {
    }
    /**
     * resolve srv record
     */
    DnsQuery.ResolveSrvRecord = function (address) {
        return PromiseFactory_1.PromiseFactory.create(function (successDelegate, errorDelegate, progressDelegate) {
            dns.resolveSrv(address, function (err, addresses) {
                if (err) {
                    if (errorDelegate)
                        errorDelegate(err);
                }
                else {
                    if (successDelegate)
                        successDelegate(addresses);
                }
            });
        });
    };
    return DnsQuery;
}());
exports.DnsQuery = DnsQuery;
