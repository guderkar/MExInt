"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FileAttachment_1 = require("../../ComplexProperties/FileAttachment");
var ItemAttachment_1 = require("../../ComplexProperties/ItemAttachment");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the response to an individual attachment retrieval request.
 */
var GetAttachmentResponse = (function (_super) {
    __extends(GetAttachmentResponse, _super);
    /**
     * @internal Initializes a new instance of the  class.
     *
     * @param   {Attachment}   attachment   The attachment.
     */
    function GetAttachmentResponse(attachment) {
        _super.call(this);
        this.attachment = null;
        this.attachment = attachment;
    }
    Object.defineProperty(GetAttachmentResponse.prototype, "Attachment", {
        get: function () {
            return this.attachment;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from XMLJsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service          The service.
     */
    GetAttachmentResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        if (jsObject[XmlElementNames_1.XmlElementNames.Attachments]) {
            var attachmentContainer = jsObject[XmlElementNames_1.XmlElementNames.Attachments];
            var attachment = attachmentContainer[XmlElementNames_1.XmlElementNames.FileAttachment] || attachmentContainer[XmlElementNames_1.XmlElementNames.ItemAttachment] || attachmentContainer;
            if (this.attachment == null) {
                if (attachmentContainer[XmlElementNames_1.XmlElementNames.FileAttachment]) {
                    this.attachment = new FileAttachment_1.FileAttachment(service);
                }
                else if (attachmentContainer[XmlElementNames_1.XmlElementNames.ItemAttachment]) {
                    this.attachment = new ItemAttachment_1.ItemAttachment(service);
                }
            }
            if (this.attachment != null) {
                this.attachment.LoadFromXmlJsObject(attachment, service);
            }
        }
    };
    return GetAttachmentResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetAttachmentResponse = GetAttachmentResponse;
