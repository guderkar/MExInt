"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TimeZoneTransition_1 = require("./TimeZoneTransition");
var DateTime_1 = require("../../DateTime");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var ServiceLocalException_1 = require("../../Exceptions/ServiceLocalException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var ComplexProperty_1 = require("../ComplexProperty");
var CustomTimeZoneCreateParams = (function () {
    function CustomTimeZoneCreateParams() {
        this.baseOffsetToUtc = null; //TimeSpan = null;
        this.standardDisplayName = null;
        this.daylightDisplayName = null;
    }
    Object.defineProperty(CustomTimeZoneCreateParams.prototype, "BaseOffsetToUtc", {
        get: function () {
            return this.baseOffsetToUtc;
        },
        set: function (value) {
            ; //TimeSpan) {
            this.baseOffsetToUtc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomTimeZoneCreateParams.prototype, "StandardDisplayName", {
        get: function () {
            return this.standardDisplayName;
        },
        set: function (value) {
            this.standardDisplayName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomTimeZoneCreateParams.prototype, "DaylightDisplayName", {
        get: function () {
            return this.daylightDisplayName;
        },
        set: function (value) {
            this.daylightDisplayName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomTimeZoneCreateParams.prototype, "HasDaylightPeriod", {
        get: function () {
            return !ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.daylightDisplayName);
        },
        enumerable: true,
        configurable: true
    });
    return CustomTimeZoneCreateParams;
}());
exports.CustomTimeZoneCreateParams = CustomTimeZoneCreateParams;
var TimeZoneTransitionGroup = (function (_super) {
    __extends(TimeZoneTransitionGroup, _super);
    function TimeZoneTransitionGroup(timeZoneDefinition, id) {
        _super.call(this);
        //private id: string;
        this.transitions = [];
        this.timeZoneDefinition = timeZoneDefinition;
        this.Id = id;
    }
    Object.defineProperty(TimeZoneTransitionGroup.prototype, "SupportsDaylight", {
        get: function () { return this.transitions.length == 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneTransitionGroup.prototype, "TransitionToDaylight", {
        get: function () { this.InitializeTransitions(); return this.TransitionToDaylight; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneTransitionGroup.prototype, "TransitionToStandard", {
        get: function () { this.InitializeTransitions(); return this.transitionToStandard; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneTransitionGroup.prototype, "Transitions", {
        get: function () { return this.transitions; },
        enumerable: true,
        configurable: true
    });
    TimeZoneTransitionGroup.prototype.CreateAdjustmentRule = function (startDate, endDate) {
        throw new Error("TimeZoneTransitionGroup.ts - CreateAdjustmentRule : Not implemented.");
        // If there is only one transition, we can't create an adjustment rule. We have to assume
        // that the base offset to UTC is unchanged.
        if (this.transitions.length == 1) {
            return null;
        }
        // return TimeZoneInfo.AdjustmentRule.CreateAdjustmentRule(
        //     startDate.Date,
        //     endDate.Date,
        //     this.GetDaylightDelta(),
        //     this.TransitionToDaylight.CreateTransitionTime(),
        //     this.TransitionToStandard.CreateTransitionTime());
    };
    TimeZoneTransitionGroup.prototype.GetCustomTimeZoneCreationParams = function () {
        var result = new CustomTimeZoneCreateParams();
        if (this.TransitionToDaylight != null) {
            result.DaylightDisplayName = this.TransitionToDaylight.TargetPeriod.Name;
        }
        result.StandardDisplayName = this.TransitionToStandard.TargetPeriod.Name;
        // Assume that the standard period's offset is the base offset to UTC.
        // EWS returns a positive offset for time zones that are behind UTC, and
        // a negative one for time zones ahead of UTC. TimeZoneInfo does it the other
        // way around.
        result.BaseOffsetToUtc = new DateTime_1.TimeSpan(-this.TransitionToStandard.TargetPeriod.Bias);
        return result;
    };
    TimeZoneTransitionGroup.prototype.GetDaylightDelta = function () {
        if (this.SupportsDaylight) {
            // EWS returns a positive offset for time zones that are behind UTC, and
            // a negative one for time zones ahead of UTC. TimeZoneInfo does it the other
            // way around.
            return this.TransitionToStandard.TargetPeriod.Bias.Subtract(this.TransitionToDaylight.TargetPeriod.Bias);
        }
        else {
            return DateTime_1.TimeSpan.Zero;
        }
    };
    TimeZoneTransitionGroup.prototype.InitializeFromAdjustmentRule = function (adjustmentRule, standardPeriod) { throw new Error("TimeZoneTransitionGroup.ts - InitializeFromAdjustmentRule : Not implemented."); };
    TimeZoneTransitionGroup.prototype.InitializeTransitions = function () {
        if (this.transitionToStandard == null) {
            for (var _i = 0, _a = this.transitions; _i < _a.length; _i++) {
                var transition = _a[_i];
                if (transition.TargetPeriod.IsStandardPeriod || (this.transitions.length == 1)) {
                    this.transitionToStandard = transition;
                }
                else {
                    this.transitionToDaylight = transition;
                }
            }
        }
        // If we didn't find a Standard period, this is an invalid time zone group.
        if (this.transitionToStandard == null) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
    };
    //InternalToJson(service: ExchangeService): any { throw new Error("TimeZoneTransitionGroup.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("TimeZoneTransitionGroup.ts - LoadFromJson : Not implemented."); }
    TimeZoneTransitionGroup.prototype.LoadFromXmlJsObject = function (reader) { throw new Error("TimeZoneTransitionGroup.ts - LoadFromXmlJsObject : Not implemented."); };
    TimeZoneTransitionGroup.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("TimeZoneTransitionGroup.ts - ReadAttributesFromXml : Not implemented."); };
    TimeZoneTransitionGroup.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("TimeZoneTransitionGroup.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    TimeZoneTransitionGroup.prototype.Validate = function () {
        // There must be exactly one or two transitions in the group.
        if (this.transitions.length < 1 || this.transitions.length > 2) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
        // If there is only one transition, it must be of type TimeZoneTransition
        if (this.transitions.length == 1 && !(this.transitions[0] instanceof TimeZoneTransition_1.TimeZoneTransition)) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
        // If there are two transitions, none of them should be of type TimeZoneTransition
        if (this.transitions.length == 2) {
            for (var _i = 0, _a = this.transitions; _i < _a.length; _i++) {
                var transition = _a[_i];
                if (transition instanceof TimeZoneTransition_1.TimeZoneTransition) {
                    throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
                }
            }
        }
        // All the transitions in the group must be to a period.
        for (var _b = 0, _c = this.transitions; _b < _c.length; _b++) {
            var transition = _c[_b];
            if (transition.TargetPeriod == null) {
                throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }
        }
    };
    TimeZoneTransitionGroup.prototype.WriteAttributesToXml = function (writer) { writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, this.Id); };
    TimeZoneTransitionGroup.prototype.WriteElementsToXml = function (writer) {
        for (var _i = 0, _a = this.transitions; _i < _a.length; _i++) {
            var transition = _a[_i];
            transition.WriteToXml(writer);
        }
    };
    TimeZoneTransitionGroup.prototype.WriteToXml = function (writer) { _super.prototype.WriteToXml.call(this, writer, XmlElementNames_1.XmlElementNames.TransitionsGroup); };
    return TimeZoneTransitionGroup;
}(ComplexProperty_1.ComplexProperty));
exports.TimeZoneTransitionGroup = TimeZoneTransitionGroup;
