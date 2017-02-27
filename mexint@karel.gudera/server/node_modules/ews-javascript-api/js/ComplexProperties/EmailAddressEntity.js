"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtractedEntity_1 = require("./ExtractedEntity");
/**
 * Represents an EmailAddressEntity object.
 */
var EmailAddressEntity = (function (_super) {
    __extends(EmailAddressEntity, _super);
    /**
     * @internal Initializes a new instance of the **EmailAddressEntity** class.
     */
    function EmailAddressEntity() {
        _super.call(this);
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    EmailAddressEntity.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NlgEmailAddress:
                    this.EmailAddress = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    return EmailAddressEntity;
}(ExtractedEntity_1.ExtractedEntity));
exports.EmailAddressEntity = EmailAddressEntity;
