"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EmailUserEntityCollection_1 = require("./EmailUserEntityCollection");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtractedEntity_1 = require("./ExtractedEntity");
/**
 * Represents an MeetingSuggestion object.
 */
var MeetingSuggestion = (function (_super) {
    __extends(MeetingSuggestion, _super);
    /**
     * @internal Initializes a new instance of the **MeetingSuggestion** class.
     */
    function MeetingSuggestion() {
        _super.call(this);
        /**
         * Gets the meeting suggestion Attendees.
         */
        this.Attendees = null;
        /**
         * Gets the meeting suggestion Location.
         */
        this.Location = null;
        /**
         * Gets the meeting suggestion Subject.
         */
        this.Subject = null;
        /**
         * Gets the meeting suggestion MeetingString.
         */
        this.MeetingString = null;
        /**
         * Gets the meeting suggestion StartTime.
         */
        this.StartTime = null;
        /**
         * Gets the meeting suggestion EndTime.
         */
        this.EndTime = null;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    MeetingSuggestion.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NlgAttendees:
                    this.Attendees = new EmailUserEntityCollection_1.EmailUserEntityCollection();
                    this.Attendees.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.NlgLocation:
                    this.Location = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgSubject:
                    this.Subject = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgMeetingString:
                    this.MeetingString = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgStartTime:
                    this.StartTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.NlgEndTime:
                    this.EndTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    return MeetingSuggestion;
}(ExtractedEntity_1.ExtractedEntity));
exports.MeetingSuggestion = MeetingSuggestion;
