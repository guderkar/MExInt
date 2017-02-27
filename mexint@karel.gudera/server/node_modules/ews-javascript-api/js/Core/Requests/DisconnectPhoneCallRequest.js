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
var DisconnectPhoneCallRequest = (function (_super) {
    __extends(DisconnectPhoneCallRequest, _super);
    function DisconnectPhoneCallRequest() {
        _super.apply(this, arguments);
    }
    DisconnectPhoneCallRequest.prototype.Execute = function () { throw new Error("DisconnectPhoneCallRequest.ts - Execute : Not implemented."); };
    DisconnectPhoneCallRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("DisconnectPhoneCallRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    DisconnectPhoneCallRequest.prototype.GetResponseXmlElementName = function () { throw new Error("DisconnectPhoneCallRequest.ts - GetResponseXmlElementName : Not implemented."); };
    DisconnectPhoneCallRequest.prototype.GetXmlElementName = function () { throw new Error("DisconnectPhoneCallRequest.ts - GetXmlElementName : Not implemented."); };
    DisconnectPhoneCallRequest.prototype.ParseResponse = function (reader) { throw new Error("DisconnectPhoneCallRequest.ts - ParseResponse : Not implemented."); };
    DisconnectPhoneCallRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("DisconnectPhoneCallRequest.ts - WriteElementsToXml : Not implemented."); };
    return DisconnectPhoneCallRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.DisconnectPhoneCallRequest = DisconnectPhoneCallRequest;
