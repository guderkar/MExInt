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
var SetEncryptionConfigurationRequest = (function (_super) {
    __extends(SetEncryptionConfigurationRequest, _super);
    function SetEncryptionConfigurationRequest() {
        _super.apply(this, arguments);
    }
    SetEncryptionConfigurationRequest.prototype.Execute = function () { throw new Error("SetEncryptionConfigurationRequest.ts - Execute : Not implemented."); };
    SetEncryptionConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("SetEncryptionConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    SetEncryptionConfigurationRequest.prototype.GetResponseXmlElementName = function () { throw new Error("SetEncryptionConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); };
    SetEncryptionConfigurationRequest.prototype.GetXmlElementName = function () { throw new Error("SetEncryptionConfigurationRequest.ts - GetXmlElementName : Not implemented."); };
    SetEncryptionConfigurationRequest.prototype.ParseResponse = function (reader) { throw new Error("SetEncryptionConfigurationRequest.ts - ParseResponse : Not implemented."); };
    SetEncryptionConfigurationRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("SetEncryptionConfigurationRequest.ts - WriteElementsToXml : Not implemented."); };
    return SetEncryptionConfigurationRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.SetEncryptionConfigurationRequest = SetEncryptionConfigurationRequest;
