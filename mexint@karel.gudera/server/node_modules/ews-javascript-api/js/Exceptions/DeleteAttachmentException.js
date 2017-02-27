"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BatchServiceResponseException_1 = require("./BatchServiceResponseException");
/**
 * Represents an error that occurs when a call to the DeleteAttachment web method fails.
 */
var DeleteAttachmentException = (function (_super) {
    __extends(DeleteAttachmentException, _super);
    function DeleteAttachmentException(serviceResponses, message, innerException) {
        if (arguments.length == 2)
            _super.call(this, serviceResponses, message);
        else
            _super.call(this, serviceResponses, message, innerException);
    }
    return DeleteAttachmentException;
}(BatchServiceResponseException_1.BatchServiceResponseException));
exports.DeleteAttachmentException = DeleteAttachmentException;
