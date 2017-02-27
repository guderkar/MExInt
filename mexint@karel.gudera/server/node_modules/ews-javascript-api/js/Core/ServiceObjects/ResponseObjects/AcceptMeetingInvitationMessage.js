"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../XmlElementNames");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var CalendarResponseMessage_1 = require("./CalendarResponseMessage");
/**
 * Represents a meeting acceptance message.
 *
 */
var AcceptMeetingInvitationMessage = (function (_super) {
    __extends(AcceptMeetingInvitationMessage, _super);
    /**
     * Initializes a new instance of the **AcceptMeetingInvitationMessage** class.
     *
     * @param   {Item}            referenceItem   The reference item.
     * @param   {boolean}         tentative       if set to true accept invitation tentatively.
     */
    function AcceptMeetingInvitationMessage(referenceItem, tentative) {
        _super.call(this, referenceItem);
        this.tentative = false;
        this.tentative = tentative;
    }
    Object.defineProperty(AcceptMeetingInvitationMessage.prototype, "Tentative", {
        /**
         * Gets a value indicating whether the associated meeting is tentatively accepted.
         *
         */
        get: function () {
            return this.tentative;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    AcceptMeetingInvitationMessage.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal This methods lets subclasses of ServiceObject override the default mechanism by which the XML element name associated with their type is retrieved.
     *
     * @return  {string}      The XML element name associated with this type. If this method returns null or empty, the XML element name associated with this type is determined by the EwsObjectDefinition attribute that decorates the type, if present.
     */
    AcceptMeetingInvitationMessage.prototype.GetXmlElementNameOverride = function () {
        if (this.tentative) {
            return XmlElementNames_1.XmlElementNames.TentativelyAcceptItem;
        }
        else {
            return XmlElementNames_1.XmlElementNames.AcceptItem;
        }
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    AcceptMeetingInvitationMessage.prototype.GetXmlElementName = function () { return this.GetXmlElementNameOverride(); };
    return AcceptMeetingInvitationMessage;
}(CalendarResponseMessage_1.CalendarResponseMessage));
exports.AcceptMeetingInvitationMessage = AcceptMeetingInvitationMessage;
