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
var GetPhoneCallRequest = (function (_super) {
    __extends(GetPhoneCallRequest, _super);
    function GetPhoneCallRequest() {
        _super.apply(this, arguments);
    }
    GetPhoneCallRequest.prototype.Execute = function () { throw new Error("GetPhoneCallRequest.ts - Execute : Not implemented."); };
    GetPhoneCallRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetPhoneCallRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetPhoneCallRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetPhoneCallRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetPhoneCallRequest.prototype.GetXmlElementName = function () { throw new Error("GetPhoneCallRequest.ts - GetXmlElementName : Not implemented."); };
    GetPhoneCallRequest.prototype.ParseResponse = function (reader) { throw new Error("GetPhoneCallRequest.ts - ParseResponse : Not implemented."); };
    GetPhoneCallRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetPhoneCallRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetPhoneCallRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetPhoneCallRequest = GetPhoneCallRequest;
