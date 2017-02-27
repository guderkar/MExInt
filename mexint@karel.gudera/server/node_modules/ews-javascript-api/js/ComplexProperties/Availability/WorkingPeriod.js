"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DayOfTheWeek_1 = require("../../Enumerations/DayOfTheWeek");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var DateTime_1 = require("../../DateTime");
var ComplexProperty_1 = require("../ComplexProperty");
var WorkingPeriod = (function (_super) {
    __extends(WorkingPeriod, _super);
    function WorkingPeriod() {
        _super.call(this);
        this.daysOfWeek = [] /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
        this.startTime = null /*System.TimeSpan*/;
        this.endTime = null /*System.TimeSpan*/;
    }
    Object.defineProperty(WorkingPeriod.prototype, "DaysOfWeek", {
        get: function () { return this.daysOfWeek; } /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingPeriod.prototype, "StartTime", {
        get: function () { return this.startTime; } /*System.TimeSpan*/,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingPeriod.prototype, "EndTime", {
        get: function () { return this.endTime; } /*System.TimeSpan*/,
        enumerable: true,
        configurable: true
    });
    WorkingPeriod.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("WorkingPeriod.ts - LoadFromJson : Not implemented."); };
    WorkingPeriod.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("WorkingPeriod.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    WorkingPeriod.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.DayOfWeek:
                    EwsUtilities_1.EwsUtilities.ParseEnumValueList(this.daysOfWeek, jsonProperty[key], ' ', DayOfTheWeek_1.DayOfTheWeek);
                    break;
                case XmlElementNames_1.XmlElementNames.StartTimeInMinutes:
                    this.startTime = DateTime_1.TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                case XmlElementNames_1.XmlElementNames.EndTimeInMinutes:
                    this.endTime = DateTime_1.TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                default:
                    break;
            }
        }
    };
    return WorkingPeriod;
}(ComplexProperty_1.ComplexProperty));
exports.WorkingPeriod = WorkingPeriod;
