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
var GetClientExtensionResponse = (function (_super) {
    __extends(GetClientExtensionResponse, _super);
    function GetClientExtensionResponse() {
        _super.apply(this, arguments);
    }
    GetClientExtensionResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GetClientExtensionResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return GetClientExtensionResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetClientExtensionResponse = GetClientExtensionResponse;
