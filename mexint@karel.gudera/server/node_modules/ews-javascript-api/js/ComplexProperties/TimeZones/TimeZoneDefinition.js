"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TimeZoneTransition_1 = require("./TimeZoneTransition");
var TimeZoneTransitionGroup_1 = require("./TimeZoneTransitionGroup");
var AbsoluteDateTransition_1 = require("./AbsoluteDateTransition");
var ServiceLocalException_1 = require("../../Exceptions/ServiceLocalException");
var Strings_1 = require("../../Strings");
var DateTime_1 = require("../../DateTime");
var EwsLogging_1 = require("../../Core/EwsLogging");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var AltDictionary_1 = require("../../AltDictionary");
var ComplexProperty_1 = require("../ComplexProperty");
var TimeZoneDefinition = (function (_super) {
    __extends(TimeZoneDefinition, _super);
    function TimeZoneDefinition(timezoneInfo) {
        _super.call(this);
        this.Name = "UTC"; //check:utc by default
        this.Id = "UTC"; //check:utc by default
        //private name: string; backing property not needed
        //private id: string;
        this.periods = new AltDictionary_1.DictionaryWithStringKey(); // System.Collections.Generic.Dictionary<string, TimeZonePeriod>;
        this.transitionGroups = new AltDictionary_1.DictionaryWithStringKey(); // System.Collections.Generic.Dictionary<string, TimeZoneTransitionGroup>;
        this.transitions = []; //System.Collections.Generic.List<TimeZoneTransition>;
        if (typeof timezoneInfo !== 'undefined' && timezoneInfo !== DateTime_1.TimeZoneInfo.Utc) {
            EwsLogging_1.EwsLogging.Assert(false, "TimeZoneDefinition.ts - ctor", "timezone not implemented properly, always default to UTC");
        }
    }
    Object.defineProperty(TimeZoneDefinition.prototype, "Periods", {
        get: function () { return this.periods; } // System.Collections.Generic.Dictionary<string, TimeZonePeriod>;
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneDefinition.prototype, "TransitionGroups", {
        get: function () { return this.transitionGroups; } // System.Collections.Generic.Dictionary<string, TimeZoneTransitionGroup>;
        ,
        enumerable: true,
        configurable: true
    });
    TimeZoneDefinition.prototype.CompareTransitions = function (x, y) {
        if (x == y) {
            return 0;
        }
        else if (x instanceof TimeZoneTransition_1.TimeZoneTransition) {
            return -1;
        }
        else if (y instanceof TimeZoneTransition_1.TimeZoneTransition) {
            return 1;
        }
        else {
            var firstTransition = x;
            var secondTransition = y;
            return DateTime_1.DateTime.Compare(firstTransition.DateTime, secondTransition.DateTime);
        }
    };
    TimeZoneDefinition.prototype.CreateTransitionGroupToPeriod = function (timeZonePeriod) {
        var transitionToPeriod = new TimeZoneTransition_1.TimeZoneTransition(this, timeZonePeriod);
        var transitionGroup = new TimeZoneTransitionGroup_1.TimeZoneTransitionGroup(this, this.transitionGroups.Count.toString());
        transitionGroup.Transitions.push(transitionToPeriod);
        this.transitionGroups.Add(transitionGroup.Id, transitionGroup);
        return transitionGroup;
    };
    //InternalToJson(service: ExchangeService): any { throw new Error("TimeZoneDefinition.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("TimeZoneDefinition.ts - LoadFromJson : Not implemented."); }
    TimeZoneDefinition.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        throw new Error("TimeZoneDefinition.ts - LoadFromXmlJsObject : Not implemented.");
        // for (var key in jsonProperty) {
        //     switch (key) {
        //         case XmlAttributeNames.Name:
        //             this.Name = jsonProperty[key];
        //             break;
        //         case XmlAttributeNames.Id:
        //             this.Id = jsonProperty[key];
        //             break;
        //         case XmlElementNames.Periods:
        //             var jsonperiods: any[] = EwsServiceJsonReader.ReadAsArray(jsonProperty[key], XmlElementNames.Period);
        //             for (var jsonPeriod of jsonperiods) {
        //                 var period: TimeZonePeriod = new TimeZonePeriod();
        //                 period.LoadFromXmlJsObject(jsonPeriod, service);
        //                 this.periods.addUpdate(period.Id, period);
        //             }
        //             break;
        //         case XmlElementNames.TransitionsGroups:
        //             var arrayOfTransitionsType: any[] = EwsServiceJsonReader.ReadAsArray(jsonProperty[key], XmlElementNames.TransitionsGroup);
        //             for (var arrayOfTransitionsTypeInstance of arrayOfTransitionsType) {
        //                 var transitionGroup: TimeZoneTransitionGroup = new TimeZoneTransitionGroup(this);
        //                 transitionGroup.LoadFromXmlJsObject(arrayOfTransitionsTypeInstance, service);
        //                 this.transitionGroups.addUpdate(transitionGroup.Id, transitionGroup);
        //             }
        //             break;
        //         case XmlElementNames.Transitions:
        //             JsonObject arrayOfTransitionsType = jsonProperty.ReadAsJsonObject(key);
        //             foreach(object uncastJsonTransition in arrayOfTransitionsType.ReadAsArray(XmlElementNames.Transition))
        //             {
        //                 JsonObject jsonTransition = uncastJsonTransition as JsonObject;
        //                 TimeZoneTransition transition = TimeZoneTransition.Create(this, jsonTransition.ReadTypeString());
        //                 transition.LoadFromJson(jsonTransition, service);
        //                 this.transitions.Add(transition);
        //             }
        //             break;
        //         default:
        //             break;
        //     }
        // }
        // // EWS can return a TimeZone definition with no Id. Generate a new Id in this case.
        // if (string.IsNullOrEmpty(this.id)) {
        //     string nameValue = string.IsNullOrEmpty(this.Name) ? string.Empty : this.Name;
        //     this.Id = NoIdPrefix + Math.Abs(nameValue.GetHashCode()).ToString();
        // }
        // this.transitions.Sort(this.CompareTransitions);
    };
    //ReadAttributesFromXmlJsObject(reader: any): any { throw new Error("TimeZoneDefinition.ts - ReadAttributesFromXml : Not implemented."); }
    TimeZoneDefinition.prototype.ToTimeZoneInfo = function (service) { throw new Error("TimeZoneDefinition.ts - ToTimeZoneInfo : Not implemented."); };
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("TimeZoneDefinition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    TimeZoneDefinition.prototype.Validate = function () {
        // The definition must have at least one period, one transition group and one transition,
        // and there must be as many transitions as there are transition groups.
        if (this.periods.Count < 1 || this.transitions.length < 1 || this.transitionGroups.Count < 1 ||
            this.transitionGroups.Count != this.transitions.length) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
        // The first transition must be of type TimeZoneTransition.
        if (!(this.transitions[0] instanceof TimeZoneTransition_1.TimeZoneTransition)) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
        // All transitions must be to transition groups and be either TimeZoneTransition or
        // AbsoluteDateTransition instances.
        for (var _i = 0, _a = this.transitions; _i < _a.length; _i++) {
            var transition = _a[_i];
            //Type transitionType = transition.GetType();
            if (!(transition instanceof TimeZoneTransition_1.TimeZoneTransition) && !(transition instanceof AbsoluteDateTransition_1.AbsoluteDateTransition)) {
                throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }
            if (transition.TargetGroup == null) {
                throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }
        }
        // All transition groups must be valid.
        for (var _b = 0, _c = this.transitionGroups.Values; _b < _c.length; _b++) {
            var transitionGroup = _c[_b];
            transitionGroup.Validate();
        }
    };
    TimeZoneDefinition.prototype.WriteAttributesToXml = function (writer) {
        // The Name attribute is only supported in Exchange 2010 and above.
        if (writer.Service.RequestedServerVersion != ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Name, this.Name);
        }
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, this.Id);
    };
    TimeZoneDefinition.prototype.WriteElementsToXml = function (writer) {
        // We only emit the full time zone definition against Exchange 2010 servers and above.
        if (writer.Service.RequestedServerVersion != ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            if (this.periods.Count > 0) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Periods);
                for (var _i = 0, _a = this.periods.Items; _i < _a.length; _i++) {
                    var keyValuePair = _a[_i];
                    keyValuePair.value.WriteToXml(writer);
                }
                writer.WriteEndElement(); // Periods
            }
            if (this.transitionGroups.Count > 0) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.TransitionsGroups);
                for (var _b = 0, _c = this.transitionGroups.Items; _b < _c.length; _b++) {
                    var transitionPair = _c[_b];
                    transitionPair.value.WriteToXml(writer);
                }
                writer.WriteEndElement(); // TransitionGroups
            }
            if (this.transitions.length > 0) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Transitions);
                for (var _d = 0, _e = this.transitions; _d < _e.length; _d++) {
                    var transition = _e[_d];
                    transition.WriteToXml(writer);
                }
                writer.WriteEndElement(); // Transitions
            }
        }
    };
    TimeZoneDefinition.prototype.WriteToXml = function (writer, xmlElementName) {
        _super.prototype.WriteToXml.call(this, writer, xmlElementName || XmlElementNames_1.XmlElementNames.TimeZoneDefinition, this.Namespace);
    };
    TimeZoneDefinition.NoIdPrefix = "NoId_";
    return TimeZoneDefinition;
}(ComplexProperty_1.ComplexProperty));
exports.TimeZoneDefinition = TimeZoneDefinition;
