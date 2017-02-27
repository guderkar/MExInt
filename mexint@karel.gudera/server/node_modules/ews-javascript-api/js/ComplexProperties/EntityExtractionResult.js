"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddressEntityCollection_1 = require("./AddressEntityCollection");
var ContactEntityCollection_1 = require("./ContactEntityCollection");
var EmailAddressEntityCollection_1 = require("./EmailAddressEntityCollection");
var MeetingSuggestionCollection_1 = require("./MeetingSuggestionCollection");
var PhoneEntityCollection_1 = require("./PhoneEntityCollection");
var TaskSuggestionCollection_1 = require("./TaskSuggestionCollection");
var UrlEntityCollection_1 = require("./UrlEntityCollection");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an EntityExtractionResult object.
 */
var EntityExtractionResult = (function (_super) {
    __extends(EntityExtractionResult, _super);
    /**
     * @internal Initializes a new instance of the **EntityExtractionResult** class.
     */
    function EntityExtractionResult() {
        _super.call(this);
        /**
         * Gets the extracted Addresses.
         */
        this.Addresses = null;
        /**
         * Gets the extracted MeetingSuggestions.
         */
        this.MeetingSuggestions = null;
        /**
         * Gets the extracted TaskSuggestions.
         */
        this.TaskSuggestions = null;
        /**
         * Gets the extracted EmailAddresses.
         */
        this.EmailAddresses = null;
        /**
         * Gets the extracted Contacts.
         */
        this.Contacts = null;
        /**
         * Gets the extracted Urls.
         */
        this.Urls = null;
        /**
         * Gets the extracted PhoneNumbers
         */
        this.PhoneNumbers = null;
        this.Namespace = XmlNamespace_1.XmlNamespace.Types;
    }
    /**
     * @internal Read element from XMLJsObject.
     *
     * @param   {any}   jsObject   xmljsonObject
     * @return  {ExchangeService} the ExchangeService
     */
    EntityExtractionResult.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            if (jsObject.hasOwnProperty(key)) {
                switch (key) {
                    case XmlElementNames_1.XmlElementNames.NlgAddresses:
                        this.Addresses = new AddressEntityCollection_1.AddressEntityCollection();
                        this.Addresses.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgMeetingSuggestions:
                        this.MeetingSuggestions = new MeetingSuggestionCollection_1.MeetingSuggestionCollection();
                        this.MeetingSuggestions.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgTaskSuggestions:
                        this.TaskSuggestions = new TaskSuggestionCollection_1.TaskSuggestionCollection();
                        this.TaskSuggestions.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgEmailAddresses:
                        this.EmailAddresses = new EmailAddressEntityCollection_1.EmailAddressEntityCollection();
                        this.EmailAddresses.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgContacts:
                        this.Contacts = new ContactEntityCollection_1.ContactEntityCollection();
                        this.Contacts.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgUrls:
                        this.Urls = new UrlEntityCollection_1.UrlEntityCollection();
                        this.Urls.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgPhoneNumbers:
                        this.PhoneNumbers = new PhoneEntityCollection_1.PhoneEntityCollection();
                        this.PhoneNumbers.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    default:
                        break;
                }
            }
        }
    };
    return EntityExtractionResult;
}(ComplexProperty_1.ComplexProperty));
exports.EntityExtractionResult = EntityExtractionResult;
