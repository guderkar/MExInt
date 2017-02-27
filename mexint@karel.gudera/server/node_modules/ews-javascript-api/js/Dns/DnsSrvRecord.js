"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DnsRecord_1 = require("./DnsRecord");
var DnsSrvRecord = (function (_super) {
    __extends(DnsSrvRecord, _super);
    function DnsSrvRecord() {
        _super.apply(this, arguments);
    }
    DnsSrvRecord.prototype.Load = function (header, dataPointer) { throw new Error("DnsSrvRecord.ts - Load : Not implemented."); };
    return DnsSrvRecord;
}(DnsRecord_1.DnsRecord));
exports.DnsSrvRecord = DnsSrvRecord;
//------------modulename->Microsoft.Exchange.WebServices.Dns------------
