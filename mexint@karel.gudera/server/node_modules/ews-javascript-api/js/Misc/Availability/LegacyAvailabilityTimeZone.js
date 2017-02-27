"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LegacyAvailabilityTimeZoneTime_1 = require("./LegacyAvailabilityTimeZoneTime");
var DateTime_1 = require("../../DateTime");
var DayOfTheWeek_1 = require("../../Enumerations/DayOfTheWeek");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var ComplexProperty_1 = require("../../ComplexProperties/ComplexProperty");
var LegacyAvailabilityTimeZone = (function (_super) {
    __extends(LegacyAvailabilityTimeZone, _super);
    function LegacyAvailabilityTimeZone(timeZone /** MomentTimezone */) {
        _super.call(this);
        if (typeof timeZone !== 'undefined') {
            this.daylightTime = new LegacyAvailabilityTimeZoneTime_1.LegacyAvailabilityTimeZoneTime();
            this.daylightTime.Delta = DateTime_1.TimeSpan.Zero;
            this.daylightTime.DayOrder = 1;
            this.daylightTime.DayOfTheWeek = DayOfTheWeek_1.DayOfTheWeek.Sunday;
            this.daylightTime.Month = 10;
            this.daylightTime.TimeOfDay = DateTime_1.TimeSpan.FromHours(2);
            this.daylightTime.Year = 0;
            this.standardTime = new LegacyAvailabilityTimeZoneTime_1.LegacyAvailabilityTimeZoneTime();
            this.standardTime.Delta = DateTime_1.TimeSpan.Zero;
            this.standardTime.DayOrder = 1;
            this.standardTime.DayOfTheWeek = DayOfTheWeek_1.DayOfTheWeek.Sunday;
            this.standardTime.Month = 3;
            this.standardTime.TimeOfDay = DateTime_1.TimeSpan.FromHours(2);
            this.daylightTime.Year = 0;
        }
    }
    LegacyAvailabilityTimeZone.prototype.InternalToJson = function (service) { throw new Error("LegacyAvailabilityTimeZone.ts - InternalToJson : Not implemented."); };
    LegacyAvailabilityTimeZone.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("LegacyAvailabilityTimeZone.ts - LoadFromJson : Not implemented."); };
    LegacyAvailabilityTimeZone.prototype.ToTimeZoneInfo = function () { throw new Error("LegacyAvailabilityTimeZone.ts - ToTimeZoneInfo : Not implemented."); };
    LegacyAvailabilityTimeZone.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("LegacyAvailabilityTimeZone.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    LegacyAvailabilityTimeZone.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Bias:
                    this.bias = DateTime_1.TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                case XmlElementNames_1.XmlElementNames.StandardTime:
                    this.standardTime = new LegacyAvailabilityTimeZoneTime_1.LegacyAvailabilityTimeZoneTime();
                    this.standardTime.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.DaylightTime:
                    this.daylightTime = new LegacyAvailabilityTimeZoneTime_1.LegacyAvailabilityTimeZoneTime();
                    this.daylightTime.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    LegacyAvailabilityTimeZone.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Bias, this.bias.TotalMinutes);
        this.standardTime.WriteToXml(writer, XmlElementNames_1.XmlElementNames.StandardTime);
        this.daylightTime.WriteToXml(writer, XmlElementNames_1.XmlElementNames.DaylightTime);
    };
    return LegacyAvailabilityTimeZone;
}(ComplexProperty_1.ComplexProperty));
exports.LegacyAvailabilityTimeZone = LegacyAvailabilityTimeZone;
