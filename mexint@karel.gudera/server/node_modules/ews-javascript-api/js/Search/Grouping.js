"use strict";
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var SortDirection_1 = require("../Enumerations/SortDirection");
var AggregateType_1 = require("../Enumerations/AggregateType");
var Grouping = (function () {
    function Grouping(groupOn, sortDirection, aggregateOn, aggregateType) {
        this.SortDirection = SortDirection_1.SortDirection.Ascending;
        this.AggregateType = AggregateType_1.AggregateType.Minimum;
        if (arguments.length > 0 && arguments.length < 4) {
            throw new Error("Grouping.ts - ctor: incorrect number of parameters for constructor call");
        }
        //EwsUtilities.ValidateParam(groupOn, "groupOn");
        //EwsUtilities.ValidateParam(aggregateOn, "aggregateOn");
        this.GroupOn = groupOn;
        this.SortDirection = sortDirection;
        this.AggregateOn = aggregateOn;
        this.AggregateType = aggregateType;
    }
    Grouping.prototype.InternalValidate = function () {
        //todo: implement validation
        //EwsUtilities.ValidateParam(this.GroupOn, "GroupOn");
        //EwsUtilities.ValidateParam(this.AggregateOn, "AggregateOn");
    };
    Grouping.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.GroupBy);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Order, SortDirection_1.SortDirection[this.SortDirection]);
        this.GroupOn.WriteToXml(writer);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AggregateOn);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Aggregate, AggregateType_1.AggregateType[this.AggregateType]);
        this.AggregateOn.WriteToXml(writer);
        writer.WriteEndElement(); // AggregateOn
        writer.WriteEndElement(); // GroupBy
    };
    return Grouping;
}());
exports.Grouping = Grouping;
