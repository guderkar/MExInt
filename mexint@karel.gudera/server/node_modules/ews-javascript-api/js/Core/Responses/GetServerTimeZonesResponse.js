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
var GetServerTimeZonesResponse = (function (_super) {
    __extends(GetServerTimeZonesResponse, _super);
    function GetServerTimeZonesResponse() {
        _super.apply(this, arguments);
    }
    GetServerTimeZonesResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GetServerTimeZonesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return GetServerTimeZonesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetServerTimeZonesResponse = GetServerTimeZonesResponse;
