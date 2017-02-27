"use strict";
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var Strings_1 = require("../../Strings");
var TimeWindow = (function () {
    function TimeWindow(startTime, endTime) {
        this.StartTime = startTime;
        this.EndTime = endTime;
    }
    Object.defineProperty(TimeWindow.prototype, "Duration", {
        get: function () { return this.StartTime.Difference(this.EndTime); },
        enumerable: true,
        configurable: true
    });
    //InternalToJson(service: ExchangeService): any { throw new Error("TimeWindow.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonObject: any, service: ExchangeService): any { throw new Error("TimeWindow.ts - LoadFromJson : Not implemented."); }
    TimeWindow.prototype.LoadFromXmlJsObject = function (jsonObject, service) {
        this.StartTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsonObject[XmlElementNames_1.XmlElementNames.StartTime]);
        this.EndTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsonObject[XmlElementNames_1.XmlElementNames.EndTime]);
    };
    //LoadFromXml(reader: any): any { throw new Error("TimeWindow.ts - LoadFromXml : Not implemented."); }
    TimeWindow.prototype.Validate = function () {
        if (this.StartTime.CompareTo(this.EndTime) >= 0) {
            throw new Error(Strings_1.Strings.TimeWindowStartTimeMustBeGreaterThanEndTime); //ArgumentException
        }
    };
    //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any{ throw new Error("TimeWindow.ts - WriteToXml : Not implemented.");}
    TimeWindow.prototype.WriteToXml = function (writer, xmlElementName, startTime, endTime) {
        if (startTime === void 0) { startTime = this.StartTime; }
        if (endTime === void 0) { endTime = this.EndTime; }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, xmlElementName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.StartTime, startTime);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.EndTime, endTime);
        writer.WriteEndElement(); // xmlElementName
    };
    TimeWindow.prototype.WriteToXmlUnscopedDatesOnly = function (writer, xmlElementName) {
        var DateOnlyFormat = "YYYY-MM-DDT00:00:00";
        this.WriteToXml(writer, xmlElementName, this.StartTime.Format(DateOnlyFormat), // CultureInfo.InvariantCulture),
        this.EndTime.Format(DateOnlyFormat) // CultureInfo.InvariantCulture));
        );
    };
    return TimeWindow;
}());
exports.TimeWindow = TimeWindow;
