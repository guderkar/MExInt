"use strict";
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var MeetingAttendeeType_1 = require("../../Enumerations/MeetingAttendeeType");
var AttendeeInfo = (function () {
    function AttendeeInfo(smtpAddress, attendeeType, excludeConflicts) {
        if (attendeeType === void 0) { attendeeType = MeetingAttendeeType_1.MeetingAttendeeType.Required; }
        if (excludeConflicts === void 0) { excludeConflicts = false; }
        this.SmtpAddress = null;
        this.AttendeeType = MeetingAttendeeType_1.MeetingAttendeeType.Required;
        this.ExcludeConflicts = false;
        this.SmtpAddress = smtpAddress;
        this.AttendeeType = attendeeType;
        this.ExcludeConflicts = excludeConflicts;
    }
    AttendeeInfo.prototype.Validate = function () {
        //EwsUtilities.ValidateParam(this.smtpAddress, "SmtpAddress");
    };
    AttendeeInfo.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MailboxData);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Email);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Address, this.SmtpAddress);
        writer.WriteEndElement(); // Email
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AttendeeType, MeetingAttendeeType_1.MeetingAttendeeType[this.AttendeeType]);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExcludeConflicts, this.ExcludeConflicts);
        writer.WriteEndElement(); // MailboxData
    };
    return AttendeeInfo;
}());
exports.AttendeeInfo = AttendeeInfo;
