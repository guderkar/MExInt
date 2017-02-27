"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var ItemId_1 = require("./ItemId");
var RecurringAppointmentMasterId = (function (_super) {
    __extends(RecurringAppointmentMasterId, _super);
    function RecurringAppointmentMasterId(occurrenceId) {
        _super.call(this, occurrenceId);
    }
    RecurringAppointmentMasterId.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.RecurringMasterItemId; };
    RecurringAppointmentMasterId.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.OccurrenceId, this.UniqueId);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.ChangeKey, this.ChangeKey);
    };
    return RecurringAppointmentMasterId;
}(ItemId_1.ItemId));
exports.RecurringAppointmentMasterId = RecurringAppointmentMasterId;
