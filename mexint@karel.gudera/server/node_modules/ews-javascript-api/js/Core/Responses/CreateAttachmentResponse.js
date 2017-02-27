"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * ## *Not Implemented*
 */
var CreateAttachmentResponse = (function (_super) {
    __extends(CreateAttachmentResponse, _super);
    function CreateAttachmentResponse() {
        _super.apply(this, arguments);
    }
    CreateAttachmentResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("CreateAttachmentResponse.ts - ReadElementsFromJson : Not implemented."); };
    CreateAttachmentResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("CreateAttachmentResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return CreateAttachmentResponse;
}(ServiceResponse_1.ServiceResponse));
exports.CreateAttachmentResponse = CreateAttachmentResponse;
