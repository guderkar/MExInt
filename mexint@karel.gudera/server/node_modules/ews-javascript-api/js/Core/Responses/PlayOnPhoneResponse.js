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
var PlayOnPhoneResponse = (function (_super) {
    __extends(PlayOnPhoneResponse, _super);
    function PlayOnPhoneResponse() {
        _super.apply(this, arguments);
    }
    PlayOnPhoneResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("PlayOnPhoneResponse.ts - ReadElementsFromJson : Not implemented."); };
    PlayOnPhoneResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("PlayOnPhoneResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return PlayOnPhoneResponse;
}(ServiceResponse_1.ServiceResponse));
exports.PlayOnPhoneResponse = PlayOnPhoneResponse;
