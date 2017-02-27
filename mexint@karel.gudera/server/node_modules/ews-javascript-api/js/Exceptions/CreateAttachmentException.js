"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BatchServiceResponseException_1 = require("./BatchServiceResponseException");
var CreateAttachmentException = (function (_super) {
    __extends(CreateAttachmentException, _super);
    function CreateAttachmentException() {
        _super.apply(this, arguments);
    }
    return CreateAttachmentException;
}(BatchServiceResponseException_1.BatchServiceResponseException));
exports.CreateAttachmentException = CreateAttachmentException;
