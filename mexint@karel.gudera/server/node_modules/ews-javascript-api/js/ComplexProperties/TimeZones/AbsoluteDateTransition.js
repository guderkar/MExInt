"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var Strings_1 = require("../../Strings");
var ServiceLocalException_1 = require("../../Exceptions/ServiceLocalException");
var TimeZoneTransition_1 = require("./TimeZoneTransition");
var AbsoluteDateTransition = (function (_super) {
    __extends(AbsoluteDateTransition, _super);
    function AbsoluteDateTransition(timeZoneDefinition, targetGroup) {
        _super.call(this, timeZoneDefinition, targetGroup);
    }
    AbsoluteDateTransition.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.AbsoluteDateTransition; };
    AbsoluteDateTransition.prototype.InitializeFromTransitionTime = function (transitionTime) { throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.UnsupportedTimeZonePeriodTransitionTarget); };
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("AbsoluteDateTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    AbsoluteDateTransition.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DateTime, this.DateTime);
    };
    return AbsoluteDateTransition;
}(TimeZoneTransition_1.TimeZoneTransition));
exports.AbsoluteDateTransition = AbsoluteDateTransition;
