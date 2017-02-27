"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var MeetingTimeZone = (function (_super) {
    __extends(MeetingTimeZone, _super);
    function MeetingTimeZone() {
        _super.apply(this, arguments);
    }
    /*fix constructor in StartTimeZonePropertyDefinition - <TimeZoneInfo>value*/
    MeetingTimeZone.prototype.InternalToJson = function (service) { throw new Error("MeetingTimeZone.ts - InternalToJson : Not implemented."); };
    MeetingTimeZone.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("MeetingTimeZone.ts - LoadFromJson : Not implemented."); };
    MeetingTimeZone.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("MeetingTimeZone.ts - ReadAttributesFromXml : Not implemented."); };
    MeetingTimeZone.prototype.ToTimeZoneInfo = function () { throw new Error("MeetingTimeZone.ts - ToTimeZoneInfo : Not implemented."); };
    MeetingTimeZone.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("MeetingTimeZone.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    MeetingTimeZone.prototype.WriteAttributesToXml = function (writer) { throw new Error("MeetingTimeZone.ts - WriteAttributesToXml : Not implemented."); };
    MeetingTimeZone.prototype.WriteElementsToXml = function (writer) { throw new Error("MeetingTimeZone.ts - WriteElementsToXml : Not implemented."); };
    return MeetingTimeZone;
}(ComplexProperty_1.ComplexProperty));
exports.MeetingTimeZone = MeetingTimeZone;
//}
