"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("../ComplexProperties/ComplexProperty");
var PhoneCall = (function (_super) {
    __extends(PhoneCall, _super);
    function PhoneCall() {
        _super.apply(this, arguments);
    }
    PhoneCall.prototype.Disconnect = function () { throw new Error("PhoneCall.ts - Disconnect : Not implemented."); };
    PhoneCall.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("PhoneCall.ts - LoadFromJson : Not implemented."); };
    PhoneCall.prototype.Refresh = function () { throw new Error("PhoneCall.ts - Refresh : Not implemented."); };
    PhoneCall.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("PhoneCall.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    PhoneCall.SuccessfulResponseText = "OK";
    PhoneCall.SuccessfulResponseCode = 200;
    return PhoneCall;
}(ComplexProperty_1.ComplexProperty));
exports.PhoneCall = PhoneCall;
//}
