"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * ## @internal *Not Implemented*
 */
var GetServerTimeZonesRequest = (function (_super) {
    __extends(GetServerTimeZonesRequest, _super);
    function GetServerTimeZonesRequest() {
        _super.apply(this, arguments);
    }
    GetServerTimeZonesRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("GetServerTimeZonesRequest.ts - CreateServiceResponse : Not implemented."); };
    GetServerTimeZonesRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("GetServerTimeZonesRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    GetServerTimeZonesRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetServerTimeZonesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetServerTimeZonesRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("GetServerTimeZonesRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    GetServerTimeZonesRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetServerTimeZonesRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetServerTimeZonesRequest.prototype.GetXmlElementName = function () { throw new Error("GetServerTimeZonesRequest.ts - GetXmlElementName : Not implemented."); };
    GetServerTimeZonesRequest.prototype.Validate = function () { throw new Error("GetServerTimeZonesRequest.ts - Validate : Not implemented."); };
    GetServerTimeZonesRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetServerTimeZonesRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetServerTimeZonesRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.GetServerTimeZonesRequest = GetServerTimeZonesRequest;
