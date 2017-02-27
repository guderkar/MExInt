"use strict";
(function (DnsRecordType) {
    DnsRecordType[DnsRecordType["A"] = 1] = "A";
    DnsRecordType[DnsRecordType["CNAME"] = 5] = "CNAME";
    DnsRecordType[DnsRecordType["SOA"] = 6] = "SOA";
    DnsRecordType[DnsRecordType["PTR"] = 12] = "PTR";
    DnsRecordType[DnsRecordType["MX"] = 15] = "MX";
    DnsRecordType[DnsRecordType["TXT"] = 16] = "TXT";
    DnsRecordType[DnsRecordType["AAAA"] = 28] = "AAAA";
    DnsRecordType[DnsRecordType["SRV"] = 33] = "SRV";
})(exports.DnsRecordType || (exports.DnsRecordType = {}));
var DnsRecordType = exports.DnsRecordType;
