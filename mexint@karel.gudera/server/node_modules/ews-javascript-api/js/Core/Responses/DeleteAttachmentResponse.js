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
var DeleteAttachmentResponse = (function (_super) {
    __extends(DeleteAttachmentResponse, _super);
    function DeleteAttachmentResponse() {
        _super.apply(this, arguments);
    }
    DeleteAttachmentResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("DeleteAttachmentResponse.ts - ReadElementsFromJson : Not implemented."); };
    DeleteAttachmentResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("DeleteAttachmentResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return DeleteAttachmentResponse;
}(ServiceResponse_1.ServiceResponse));
exports.DeleteAttachmentResponse = DeleteAttachmentResponse;
