"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
var GetPasswordExpirationDateResponse = (function (_super) {
    __extends(GetPasswordExpirationDateResponse, _super);
    function GetPasswordExpirationDateResponse() {
        _super.apply(this, arguments);
        this.passwordExpirationDate = null;
    }
    Object.defineProperty(GetPasswordExpirationDateResponse.prototype, "PasswordExpirationDate", {
        get: function () {
            return this.passwordExpirationDate;
        },
        enumerable: true,
        configurable: true
    });
    GetPasswordExpirationDateResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("GetPasswordExpirationDateResponse.ts - ReadElementsFromJson : Not implemented."); };
    GetPasswordExpirationDateResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.passwordExpirationDate = service.ConvertUniversalDateTimeStringToLocalDateTime(responseObject[XmlElementNames_1.XmlElementNames.PasswordExpirationDate]);
    };
    return GetPasswordExpirationDateResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetPasswordExpirationDateResponse = GetPasswordExpirationDateResponse;
