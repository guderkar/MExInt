"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * ## @internal *Not Implemented*
 */
var DeleteAttachmentRequest = (function (_super) {
    __extends(DeleteAttachmentRequest, _super);
    function DeleteAttachmentRequest() {
        _super.apply(this, arguments);
    }
    DeleteAttachmentRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("DeleteAttachmentRequest.ts - CreateServiceResponse : Not implemented."); };
    DeleteAttachmentRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("DeleteAttachmentRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    DeleteAttachmentRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("DeleteAttachmentRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    DeleteAttachmentRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("DeleteAttachmentRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    DeleteAttachmentRequest.prototype.GetResponseXmlElementName = function () { throw new Error("DeleteAttachmentRequest.ts - GetResponseXmlElementName : Not implemented."); };
    DeleteAttachmentRequest.prototype.GetXmlElementName = function () { throw new Error("DeleteAttachmentRequest.ts - GetXmlElementName : Not implemented."); };
    DeleteAttachmentRequest.prototype.Validate = function () { throw new Error("DeleteAttachmentRequest.ts - Validate : Not implemented."); };
    DeleteAttachmentRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("DeleteAttachmentRequest.ts - WriteElementsToXml : Not implemented."); };
    return DeleteAttachmentRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.DeleteAttachmentRequest = DeleteAttachmentRequest;
