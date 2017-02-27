"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsXmlReader_1 = require("./EwsXmlReader");
var EwsServiceXmlReader = (function (_super) {
    __extends(EwsServiceXmlReader, _super);
    //#region Constructor
    function EwsServiceXmlReader(rawXML, service) {
        _super.call(this, rawXML);
        this.service = service;
    }
    Object.defineProperty(EwsServiceXmlReader.prototype, "Service", {
        get: function () { return this.service; },
        enumerable: true,
        configurable: true
    });
    //#endregion
    EwsServiceXmlReader.prototype.ConvertStringToDateTime = function (dateTimeString) { throw new Error("EwsServiceXmlReader.ts - ConvertStringToDateTime : Not implemented."); };
    EwsServiceXmlReader.prototype.ConvertStringToUnspecifiedDate = function (dateTimeString) { throw new Error("EwsServiceXmlReader.ts - ConvertStringToUnspecifiedDate : Not implemented."); };
    EwsServiceXmlReader.prototype.ReadElementValueAsDateTime = function () { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsDateTime : Not implemented."); };
    //ReadElementValueAsDateTime(xmlNamespace: XmlNamespace, localName: string): Date { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsDateTime : Not implemented."); }
    EwsServiceXmlReader.prototype.ReadElementValueAsUnbiasedDateTimeScopedToServiceTimeZone = function () { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsUnbiasedDateTimeScopedToServiceTimeZone : Not implemented."); };
    EwsServiceXmlReader.prototype.ReadElementValueAsUnspecifiedDate = function () { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsUnspecifiedDate : Not implemented."); };
    return EwsServiceXmlReader;
}(EwsXmlReader_1.EwsXmlReader));
exports.EwsServiceXmlReader = EwsServiceXmlReader;
