"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemInfo_1 = require("../Core/ServiceObjects/Items/ItemInfo");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtensionMethods_1 = require('../ExtensionMethods');
var Strings_1 = require("../Strings");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var Attachment_1 = require("./Attachment");
/**
 * Represents an item attachment.
 */
var ItemAttachment = (function (_super) {
    __extends(ItemAttachment, _super);
    function ItemAttachment(ownerOrService) {
        _super.call(this, ownerOrService);
        /**
         * The item associated with the attachment.
         */
        this.item = null;
    }
    Object.defineProperty(ItemAttachment.prototype, "Item", {
        /**
         * Gets the item associated with the attachment.
         */
        get: function () {
            return this.item;
        },
        set: function (value) {
            _super.prototype.ThrowIfThisIsNotNew.call(this);
            //todo: implement logic for onchange
            if (this.item !== null) {
            }
            this.item = value;
            if (this.item !== null) {
            }
        },
        enumerable: true,
        configurable: true
    });
    /** to workaround base.Item property accessor of c# //ref: //info: */
    ItemAttachment.prototype._setItem = function (value) {
        this.item = value;
    };
    /**
     * @internal Obtains EWS XML element name for this object.
     *
     * @return  {string}      The XML element name.
     */
    ItemAttachment.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ItemAttachment; };
    //InternalToJson(service: ExchangeService): any { throw new Error("ItemAttachment.ts - InternalToJson : Not implemented."); }
    /**
     * Implements the OnChange event handler for the item associated with the attachment.
     *
     * @param   {ServiceObject}   serviceObject   The service object that triggered the OnChange event.
     */
    ItemAttachment.prototype.ItemChanged = function (serviceObject) {
        if (this.Owner != null) {
            this.Owner.PropertyBag.Changed();
        }
    };
    ItemAttachment.prototype.Load = function (bodyTypeOrPeoperties, additionalProperties) {
        var argsLength = arguments.length;
        var props = null;
        var bodyType = null;
        if (argsLength === 1) {
            props = bodyTypeOrPeoperties;
        }
        if (argsLength === 2) {
            bodyType = bodyTypeOrPeoperties;
        }
        if (argsLength > 2) {
            throw new Error("ItemAttachment.ts - Load with " + argsLength + " parameters, invalid number of arguments, check documentation and try again.");
        }
        return this.InternalLoad(bodyType, props);
    };
    /**
     * @internal Loads from XMLjsObject.
     *
     * @param   {any}               jsObject   The json property.
     * @param   {ExchangeService}   service        [description]
     */
    ItemAttachment.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Item:
                case XmlElementNames_1.XmlElementNames.CalendarItem:
                case XmlElementNames_1.XmlElementNames.Contact:
                case XmlElementNames_1.XmlElementNames.DistributionList:
                case XmlElementNames_1.XmlElementNames.Conversation:
                case XmlElementNames_1.XmlElementNames.Message:
                case XmlElementNames_1.XmlElementNames.MeetingCancellation:
                case XmlElementNames_1.XmlElementNames.MeetingMessage:
                case XmlElementNames_1.XmlElementNames.MeetingRequest:
                case XmlElementNames_1.XmlElementNames.MeetingResponse:
                case XmlElementNames_1.XmlElementNames.Persona:
                case XmlElementNames_1.XmlElementNames.PostItem:
                case XmlElementNames_1.XmlElementNames.Task:
                    var itemObj = jsObject[key];
                    if (itemObj != null) {
                        this.item = (new ItemInfo_1.ItemInfo()).CreateEwsObjectFromXmlElementName(this.Service, key);
                        if (this.item != null) {
                            this.item.LoadFromXmlJsObject(itemObj, this.Service, true);
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    };
    //ReadElementsFromXmlJsObject(reader: any): void { throw new Error("ItemAttachment.ts - TryReadElementFromXmlJsObject : Not implemented."); }    
    ItemAttachment.prototype.ReadElementsFromXmlJsObjectToPatch = function (reader) { throw new Error("ItemAttachment.ts - TryReadElementFromXmlToPatch : Not implemented."); };
    /**
     * @internal Validates this instance.
     *
     * @param   {number}   attachmentIndex   Index of this attachment.
     */
    ItemAttachment.prototype.Validate = function (attachmentIndex) {
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Name)) {
            throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ItemAttachmentMustBeNamed, attachmentIndex));
        }
        // Recurse through any items attached to item attachment.
        this.Item.Attachments.Validate();
    };
    /**
     * @internal Writes the properties of this object as XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer to write the elements to.
     */
    ItemAttachment.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        this.Item.WriteToXml(writer);
    };
    return ItemAttachment;
}(Attachment_1.Attachment));
exports.ItemAttachment = ItemAttachment;
