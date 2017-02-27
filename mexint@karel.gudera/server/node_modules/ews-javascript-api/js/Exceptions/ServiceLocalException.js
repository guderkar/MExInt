"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Exception_1 = require("./Exception");
/**
 * Represents an error that occurs when a service operation fails locally (e.g. validation error).
 */
var ServiceLocalException = (function (_super) {
    __extends(ServiceLocalException, _super);
    function ServiceLocalException(message, innerException) {
        if (message === void 0) { message = null; }
        if (innerException === void 0) { innerException = null; }
        _super.call(this, message, innerException);
    }
    return ServiceLocalException;
}(Exception_1.Exception));
exports.ServiceLocalException = ServiceLocalException;
