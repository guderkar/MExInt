"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * ## *Not Implemented*
 */
var GetEncryptionConfigurationResponse = (function (_super) {
    __extends(GetEncryptionConfigurationResponse, _super);
    function GetEncryptionConfigurationResponse() {
        _super.apply(this, arguments);
    }
    GetEncryptionConfigurationResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GetEncryptionConfigurationResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return GetEncryptionConfigurationResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetEncryptionConfigurationResponse = GetEncryptionConfigurationResponse;
