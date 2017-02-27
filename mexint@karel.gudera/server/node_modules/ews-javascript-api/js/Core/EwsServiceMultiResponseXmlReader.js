"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsServiceXmlReader_1 = require("./EwsServiceXmlReader");
var EwsServiceMultiResponseXmlReader = (function (_super) {
    __extends(EwsServiceMultiResponseXmlReader, _super);
    function EwsServiceMultiResponseXmlReader() {
        _super.apply(this, arguments);
    }
    EwsServiceMultiResponseXmlReader.prototype.Create = function (stream /*System.IO.Stream*/, service) { throw new Error("EwsServiceMultiResponseXmlReader.ts - Create : Not implemented."); };
    EwsServiceMultiResponseXmlReader.prototype.CreateXmlReader = function (stream /*System.IO.Stream*/) { throw new Error("EwsServiceMultiResponseXmlReader.ts - CreateXmlReader : Not implemented."); };
    EwsServiceMultiResponseXmlReader.prototype.InitializeXmlReader = function (stream /*System.IO.Stream*/) { throw new Error("EwsServiceMultiResponseXmlReader.ts - InitializeXmlReader : Not implemented."); };
    return EwsServiceMultiResponseXmlReader;
}(EwsServiceXmlReader_1.EwsServiceXmlReader));
exports.EwsServiceMultiResponseXmlReader = EwsServiceMultiResponseXmlReader;
