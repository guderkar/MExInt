"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("../ComplexProperties/ComplexProperty");
var PhoneCallId = (function (_super) {
    __extends(PhoneCallId, _super);
    function PhoneCallId() {
        _super.apply(this, arguments);
    }
    PhoneCallId.prototype.InternalToJson = function (service) { throw new Error("PhoneCallId.ts - InternalToJson : Not implemented."); };
    PhoneCallId.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("PhoneCallId.ts - LoadFromJson : Not implemented."); };
    PhoneCallId.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("PhoneCallId.ts - ReadAttributesFromXml : Not implemented."); };
    PhoneCallId.prototype.WriteAttributesToXml = function (writer) { throw new Error("PhoneCallId.ts - WriteAttributesToXml : Not implemented."); };
    PhoneCallId.prototype.WriteToXml = function (writer) { throw new Error("PhoneCallId.ts - WriteToXml : Not implemented."); };
    return PhoneCallId;
}(ComplexProperty_1.ComplexProperty));
exports.PhoneCallId = PhoneCallId;
//}
