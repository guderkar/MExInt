"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalendarEventDetails_1 = require("./CalendarEventDetails");
var LegacyFreeBusyStatus_1 = require("../../Enumerations/LegacyFreeBusyStatus");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var ComplexProperty_1 = require("../ComplexProperty");
var CalendarEvent = (function (_super) {
    __extends(CalendarEvent, _super);
    function CalendarEvent() {
        _super.apply(this, arguments);
        this.startTime = null;
        this.endTime = null;
        this.freeBusyStatus = 0;
        this.details = null;
    }
    Object.defineProperty(CalendarEvent.prototype, "StartTime", {
        get: function () {
            return this.startTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "EndTime", {
        get: function () {
            return this.endTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "FreeBusyStatus", {
        get: function () {
            return this.freeBusyStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "Details", {
        get: function () {
            return this.details;
        },
        enumerable: true,
        configurable: true
    });
    CalendarEvent.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("CalendarEvent.ts - LoadFromJson : Not implemented."); };
    CalendarEvent.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.StartTime:
                    this.startTime = EwsUtilities_1.EwsUtilities.ParseAsUnbiasedDatetimescopedToServicetimeZone(jsonProperty[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.EndTime:
                    this.endTime = EwsUtilities_1.EwsUtilities.ParseAsUnbiasedDatetimescopedToServicetimeZone(jsonProperty[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.BusyType:
                    this.freeBusyStatus = LegacyFreeBusyStatus_1.LegacyFreeBusyStatus[jsonProperty[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.CalendarEventDetails:
                    this.details = new CalendarEventDetails_1.CalendarEventDetails();
                    this.details.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    return CalendarEvent;
}(ComplexProperty_1.ComplexProperty));
exports.CalendarEvent = CalendarEvent;
