"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * ## @internal *Not Implemented*
 */
var GetClientExtensionRequest = (function (_super) {
    __extends(GetClientExtensionRequest, _super);
    function GetClientExtensionRequest() {
        _super.apply(this, arguments);
    }
    GetClientExtensionRequest.prototype.Execute = function () { throw new Error("GetClientExtensionRequest.ts - Execute : Not implemented."); };
    GetClientExtensionRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetClientExtensionRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetClientExtensionRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetClientExtensionRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetClientExtensionRequest.prototype.GetXmlElementName = function () { throw new Error("GetClientExtensionRequest.ts - GetXmlElementName : Not implemented."); };
    GetClientExtensionRequest.prototype.ParseResponse = function (reader) { throw new Error("GetClientExtensionRequest.ts - ParseResponse : Not implemented."); };
    GetClientExtensionRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetClientExtensionRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetClientExtensionRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetClientExtensionRequest = GetClientExtensionRequest;
