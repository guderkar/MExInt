"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var ClientExtension = (function (_super) {
    __extends(ClientExtension, _super);
    function ClientExtension() {
        _super.apply(this, arguments);
    }
    ClientExtension.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("ClientExtension.ts - ReadAttributesFromXml : Not implemented."); };
    ClientExtension.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("ClientExtension.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    ClientExtension.prototype.WriteAttributesToXml = function (writer) { throw new Error("ClientExtension.ts - WriteAttributesToXml : Not implemented."); };
    ClientExtension.prototype.WriteElementsToXml = function (writer) { throw new Error("ClientExtension.ts - WriteElementsToXml : Not implemented."); };
    return ClientExtension;
}(ComplexProperty_1.ComplexProperty));
exports.ClientExtension = ClientExtension;
