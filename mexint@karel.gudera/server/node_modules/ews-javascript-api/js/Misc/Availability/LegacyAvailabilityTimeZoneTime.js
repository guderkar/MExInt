"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DayOfTheWeek_1 = require("../../Enumerations/DayOfTheWeek");
var DateTime_1 = require("../../DateTime");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var ComplexProperty_1 = require("../../ComplexProperties/ComplexProperty");
var LegacyAvailabilityTimeZoneTime = (function (_super) {
    __extends(LegacyAvailabilityTimeZoneTime, _super);
    // private delta: TimeSpan /*System.TimeSpan*/; //backing property not needed
    // private year: number;
    // private month: number;
    // private dayOrder: number;
    // private dayOfTheWeek: DayOfTheWeek;
    // private timeOfDay: TimeSpan /*System.TimeSpan*/;
    function LegacyAvailabilityTimeZoneTime() {
        _super.call(this);
    }
    Object.defineProperty(LegacyAvailabilityTimeZoneTime.prototype, "HasTransitionTime", {
        get: function () { return this.Month >= 1 && this.Month <= 12; },
        enumerable: true,
        configurable: true
    });
    LegacyAvailabilityTimeZoneTime.prototype.InternalToJson = function (service) { throw new Error("LegacyAvailabilityTimeZoneTime.ts - InternalToJson : Not implemented."); };
    LegacyAvailabilityTimeZoneTime.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("LegacyAvailabilityTimeZoneTime.ts - LoadFromJson : Not implemented."); };
    LegacyAvailabilityTimeZoneTime.prototype.ToTransitionTime = function () { throw new Error("LegacyAvailabilityTimeZoneTime.ts - ToTransitionTime : Not implemented."); };
    LegacyAvailabilityTimeZoneTime.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("LegacyAvailabilityTimeZoneTime.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    LegacyAvailabilityTimeZoneTime.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Bias:
                    this.Delta = DateTime_1.TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                case XmlElementNames_1.XmlElementNames.Time:
                    this.TimeOfDay = new DateTime_1.TimeSpan(jsonProperty[key]); // momentjs taks care of parsing TimeSpan.Parse(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.DayOrder:
                    this.DayOrder = Number(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.DayOfWeek:
                    this.DayOfTheWeek = DayOfTheWeek_1.DayOfTheWeek[jsonProperty[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.Month:
                    this.Month = Number(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Year:
                    this.Year = Number(jsonProperty[key]);
                    break;
                default:
                    break;
            }
        }
    };
    LegacyAvailabilityTimeZoneTime.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Bias, this.Delta.TotalMinutes);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Time, EwsUtilities_1.EwsUtilities.TimeSpanToXSTime(this.TimeOfDay));
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DayOrder, this.DayOrder);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Month, this.Month);
        // Only write DayOfWeek if this is a recurring time change
        if (this.Year == 0) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DayOfWeek, this.DayOfTheWeek);
        }
        // Only emit year if it's non zero, otherwise AS returns "Request is invalid"
        if (this.Year != 0) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Year, this.Year);
        }
    };
    return LegacyAvailabilityTimeZoneTime;
}(ComplexProperty_1.ComplexProperty));
exports.LegacyAvailabilityTimeZoneTime = LegacyAvailabilityTimeZoneTime;
