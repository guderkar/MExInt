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
var GetEncryptionConfigurationRequest = (function (_super) {
    __extends(GetEncryptionConfigurationRequest, _super);
    function GetEncryptionConfigurationRequest() {
        _super.apply(this, arguments);
    }
    GetEncryptionConfigurationRequest.prototype.Execute = function () { throw new Error("GetEncryptionConfigurationRequest.ts - Execute : Not implemented."); };
    GetEncryptionConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetEncryptionConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetEncryptionConfigurationRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetEncryptionConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetEncryptionConfigurationRequest.prototype.GetXmlElementName = function () { throw new Error("GetEncryptionConfigurationRequest.ts - GetXmlElementName : Not implemented."); };
    GetEncryptionConfigurationRequest.prototype.ParseResponse = function (reader) { throw new Error("GetEncryptionConfigurationRequest.ts - ParseResponse : Not implemented."); };
    GetEncryptionConfigurationRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetEncryptionConfigurationRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetEncryptionConfigurationRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetEncryptionConfigurationRequest = GetEncryptionConfigurationRequest;
