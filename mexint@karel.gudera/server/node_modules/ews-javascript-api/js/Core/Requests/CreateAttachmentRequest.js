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
var CreateAttachmentRequest = (function (_super) {
    __extends(CreateAttachmentRequest, _super);
    function CreateAttachmentRequest() {
        _super.apply(this, arguments);
    }
    CreateAttachmentRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("CreateAttachmentRequest.ts - CreateServiceResponse : Not implemented."); };
    CreateAttachmentRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("CreateAttachmentRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    CreateAttachmentRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("CreateAttachmentRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    CreateAttachmentRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("CreateAttachmentRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    CreateAttachmentRequest.prototype.GetResponseXmlElementName = function () { throw new Error("CreateAttachmentRequest.ts - GetResponseXmlElementName : Not implemented."); };
    CreateAttachmentRequest.prototype.GetXmlElementName = function () { throw new Error("CreateAttachmentRequest.ts - GetXmlElementName : Not implemented."); };
    CreateAttachmentRequest.prototype.Validate = function () { throw new Error("CreateAttachmentRequest.ts - Validate : Not implemented."); };
    CreateAttachmentRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("CreateAttachmentRequest.ts - WriteElementsToXml : Not implemented."); };
    return CreateAttachmentRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.CreateAttachmentRequest = CreateAttachmentRequest;
