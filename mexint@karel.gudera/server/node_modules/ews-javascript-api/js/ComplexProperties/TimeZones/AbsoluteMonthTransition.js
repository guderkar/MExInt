"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var TimeZoneTransition_1 = require("./TimeZoneTransition");
var AbsoluteMonthTransition = (function (_super) {
    __extends(AbsoluteMonthTransition, _super);
    function AbsoluteMonthTransition(timeZoneDefinition, targetPeriod) {
        _super.call(this, timeZoneDefinition, targetPeriod);
        this.timeOffset = null;
        this.month = null;
    }
    Object.defineProperty(AbsoluteMonthTransition.prototype, "TimeOffset", {
        get: function () { return this.timeOffset; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbsoluteMonthTransition.prototype, "Month", {
        get: function () { return this.month; },
        enumerable: true,
        configurable: true
    });
    AbsoluteMonthTransition.prototype.InitializeFromTransitionTime = function (transitionTime) { throw new Error("AbsoluteMonthTransition.ts - InitializeFromTransitionTime : Not implemented."); };
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("AbsoluteMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    AbsoluteMonthTransition.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.TimeOffset, EwsUtilities_1.EwsUtilities.TimeSpanToXSDuration(this.timeOffset));
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Month, this.month);
    };
    return AbsoluteMonthTransition;
}(TimeZoneTransition_1.TimeZoneTransition));
exports.AbsoluteMonthTransition = AbsoluteMonthTransition;
