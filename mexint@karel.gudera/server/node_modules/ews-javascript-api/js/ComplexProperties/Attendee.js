"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsUtilities_1 = require("../Core/EwsUtilities");
var MeetingResponseType_1 = require("../Enumerations/MeetingResponseType");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var EmailAddress_1 = require("./EmailAddress");
/**
 * Represents an attendee to a meeting.
 */
var Attendee = (function (_super) {
    __extends(Attendee, _super);
    function Attendee(smtpAddressOrNameOrMailbox, smtpAddress, routingType) {
        switch (arguments.length) {
            case 1:
                _super.call(this, smtpAddressOrNameOrMailbox);
                if (typeof smtpAddressOrNameOrMailbox === 'string') {
                    EwsUtilities_1.EwsUtilities.ValidateParam(smtpAddressOrNameOrMailbox, "smtpAddress");
                }
                break;
            case 2:
                _super.call(this, smtpAddressOrNameOrMailbox, smtpAddress);
                break;
            case 3:
                _super.call(this, smtpAddressOrNameOrMailbox, smtpAddress, routingType);
                break;
            default:
                _super.call(this);
                break;
        }
        this.responseType = null;
        this.lastResponseTime = null;
    }
    Object.defineProperty(Attendee.prototype, "ResponseType", {
        /**
         * Gets the type of response the attendee gave to the meeting invitation it received.
         */
        get: function () {
            return this.responseType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attendee.prototype, "LastResponseTime", {
        /**
         * Gets the date and time when the attendee last responded to a meeting invitation or update.
         */
        get: function () {
            return this.lastResponseTime;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    Attendee.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            if (key.indexOf("__") === 0) {
                continue;
            }
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Mailbox:
                    _super.prototype.LoadFromXmlJsObject.call(this, jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ResponseType:
                    this.responseType = MeetingResponseType_1.MeetingResponseType[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.LastResponseTime:
                    this.lastResponseTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    Attendee.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(this.Namespace, XmlElementNames_1.XmlElementNames.Mailbox);
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteEndElement();
    };
    return Attendee;
}(EmailAddress_1.EmailAddress));
exports.Attendee = Attendee;
