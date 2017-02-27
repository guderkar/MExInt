"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TimeZonePeriod_1 = require("./TimeZonePeriod");
var TimeZoneTransitionGroup_1 = require("./TimeZoneTransitionGroup");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var ServiceLocalException_1 = require("../../Exceptions/ServiceLocalException");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("../ComplexProperty");
var TimeZoneTransition = (function (_super) {
    __extends(TimeZoneTransition, _super);
    function TimeZoneTransition(timeZoneDefinition, targetPeriodOrGroup) {
        _super.call(this);
        this.timeZoneDefinition = timeZoneDefinition;
        if (targetPeriodOrGroup instanceof TimeZonePeriod_1.TimeZonePeriod) {
            this.targetPeriod = targetPeriodOrGroup;
        }
        else if (targetPeriodOrGroup instanceof TimeZoneTransitionGroup_1.TimeZoneTransitionGroup) {
            this.targetGroup = targetPeriodOrGroup;
        }
    }
    Object.defineProperty(TimeZoneTransition.prototype, "TargetPeriod", {
        get: function () { return this.targetPeriod; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneTransition.prototype, "TargetGroup", {
        get: function () { return this.targetGroup; },
        enumerable: true,
        configurable: true
    });
    TimeZoneTransition.AbsoluteDateTransition = function (timeZoneDefinition) { throw new Error("TimeZoneTransition.ts - uninitialized workaround - bootstrap to prevent circular dependency"); };
    TimeZoneTransition.RelativeDayOfMonthTransition = function (timeZoneDefinition, targetPeriod) { throw new Error("TimeZoneTransition.ts - uninitialized workaround - bootstrap to prevent circular dependency"); };
    TimeZoneTransition.AbsoluteDayOfMonthTransition = function (timeZoneDefinition, targetPeriod) { throw new Error("TimeZoneTransition.ts - uninitialized workaround - bootstrap to prevent circular dependency"); };
    //static AbsoluteDateTransition(timeZoneDefinition:TimeZoneDefinition):AbsoluteDateTransition {throw new Error("TimeZoneTransition.ts - uninitialized workaround - bootstrap to prevent circular dependency");}
    TimeZoneTransition.prototype.Create = function (timeZoneDefinition, xmlElementName) {
        switch (xmlElementName) {
            case XmlElementNames_1.XmlElementNames.AbsoluteDateTransition:
                return TimeZoneTransition.AbsoluteDateTransition(timeZoneDefinition); //check: avoid circular module loading; new AbsoluteDateTransition(timeZoneDefinition);
            case XmlElementNames_1.XmlElementNames.RecurringDayTransition:
                return TimeZoneTransition.RelativeDayOfMonthTransition(timeZoneDefinition); //check: avoid circular module loading new RelativeDayOfMonthTransition(timeZoneDefinition);
            case XmlElementNames_1.XmlElementNames.RecurringDateTransition:
                return TimeZoneTransition.AbsoluteDayOfMonthTransition(timeZoneDefinition); //check: avoid circular module loading new AbsoluteDayOfMonthTransition(timeZoneDefinition);
            case XmlElementNames_1.XmlElementNames.Transition:
                return new TimeZoneTransition(timeZoneDefinition);
            default:
                throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.UnknownTimeZonePeriodTransitionType, xmlElementName));
        }
    };
    TimeZoneTransition.prototype.CreateTimeZoneTransition = function (timeZoneDefinition, targetPeriod, transitionTime) {
        var transition;
        if (transitionTime.IsFixedDateRule) {
            transition = TimeZoneTransition.AbsoluteDayOfMonthTransition(timeZoneDefinition, targetPeriod); //check: avoid circular module loadingnew AbsoluteDayOfMonthTransition(timeZoneDefinition, targetPeriod);
        }
        else {
            transition = TimeZoneTransition.RelativeDayOfMonthTransition(timeZoneDefinition, targetPeriod); //check: avoid circular module loadingnew RelativeDayOfMonthTransition(timeZoneDefinition, targetPeriod);
        }
        transition.InitializeFromTransitionTime(transitionTime);
        return transition;
    };
    TimeZoneTransition.prototype.CreateTransitionTime = function () { throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition); };
    TimeZoneTransition.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Transition; };
    TimeZoneTransition.prototype.InitializeFromTransitionTime = function (transitionTime) { };
    //InternalToJson(service: ExchangeService): any { throw new Error("TimeZoneTransition.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("TimeZoneTransition.ts - LoadFromJson : Not implemented."); }
    TimeZoneTransition.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        throw new Error("TimeZoneTransition.ts - LoadFromXmlJsObject : Not implemented.");
        //super.LoadFromXmlJsObject(jsonProperty, service);
        // for(var key in jsonProperty)
        // {
        //     switch (key) {
        //         case XmlElementNames.To:
        //             string targetKind = jsonProperty.ReadAsJsonObject(key).ReadAsString(XmlAttributeNames.Kind);
        //             string targetId = jsonProperty.ReadAsJsonObject(key).ReadAsString(XmlElementNames.Value);
        //             switch (targetKind) {
        //                 case TimeZoneTransition.PeriodTarget:
        //                     if (!this.timeZoneDefinition.Periods.TryGetValue(targetId, out this.targetPeriod)) {
        //                         throw new ServiceLocalException(
        //                             string.Format(
        //                                 Strings.PeriodNotFound,
        //                                 targetId));
        //                     }
        //                     break;
        //                 case TimeZoneTransition.GroupTarget:
        //                     if (!this.timeZoneDefinition.TransitionGroups.TryGetValue(targetId, out this.targetGroup)) {
        //                         throw new ServiceLocalException(
        //                             string.Format(
        //                                 Strings.TransitionGroupNotFound,
        //                                 targetId));
        //                     }
        //                     break;
        //                 default:
        //                     throw new ServiceLocalException(Strings.UnsupportedTimeZonePeriodTransitionTarget);
        //             }
        //             break;
        //     }
        // }
    };
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("TimeZoneTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    TimeZoneTransition.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.To);
        if (this.targetPeriod != null) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Kind, TimeZoneTransition.PeriodTarget);
            writer.WriteValue(this.targetPeriod.Id, XmlElementNames_1.XmlElementNames.To);
        }
        else {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Kind, TimeZoneTransition.GroupTarget);
            writer.WriteValue(this.targetGroup.Id, XmlElementNames_1.XmlElementNames.To);
        }
        writer.WriteEndElement(); // To
    };
    TimeZoneTransition.prototype.WriteToXml = function (writer) { _super.prototype.WriteToXml.call(this, writer, this.GetXmlElementName()); };
    TimeZoneTransition.PeriodTarget = "Period";
    TimeZoneTransition.GroupTarget = "Group";
    return TimeZoneTransition;
}(ComplexProperty_1.ComplexProperty));
exports.TimeZoneTransition = TimeZoneTransition;
