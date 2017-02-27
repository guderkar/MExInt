"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var ComplexProperty_1 = require("../ComplexProperty");
var TimeZonePeriod = (function (_super) {
    __extends(TimeZonePeriod, _super);
    // private bias: TimeSpan; backing property not needed 
    // private name: string;
    // private id: string;
    function TimeZonePeriod() {
        _super.call(this);
    }
    Object.defineProperty(TimeZonePeriod.prototype, "IsStandardPeriod", {
        get: function () {
            return this.Name.toUpperCase() === TimeZonePeriod.StandardPeriodName.toUpperCase();
            // return string.Compare(
            //     this.name,
            //     TimeZonePeriod.StandardPeriodName,
            //     StringComparison.OrdinalIgnoreCase) == 0;
        },
        enumerable: true,
        configurable: true
    });
    //InternalToJson(service: ExchangeService): any { throw new Error("TimeZonePeriod.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("TimeZonePeriod.ts - LoadFromJson : Not implemented."); }
    TimeZonePeriod.prototype.LoadFromXmlJsObject = function (reader) { throw new Error("TimeZonePeriod.ts - LoadFromXmlJsObject : Not implemented."); };
    //ReadAttributesFromXmlJsObject(reader: any): any { throw new Error("TimeZonePeriod.ts - ReadAttributesFromXml : Not implemented."); }
    TimeZonePeriod.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Bias, EwsUtilities_1.EwsUtilities.TimeSpanToXSDuration(this.Bias));
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Name, this.Name);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, this.Id);
    };
    TimeZonePeriod.prototype.WriteToXml = function (writer) { _super.prototype.WriteToXml.call(this, writer, XmlElementNames_1.XmlElementNames.Period); };
    TimeZonePeriod.StandardPeriodId = "Std";
    TimeZonePeriod.StandardPeriodName = "Standard";
    TimeZonePeriod.DaylightPeriodId = "Dlt";
    TimeZonePeriod.DaylightPeriodName = "Daylight";
    return TimeZonePeriod;
}(ComplexProperty_1.ComplexProperty));
exports.TimeZonePeriod = TimeZonePeriod;
