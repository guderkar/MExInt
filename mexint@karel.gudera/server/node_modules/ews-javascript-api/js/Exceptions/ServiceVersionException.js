"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceLocalException_1 = require("./ServiceLocalException");
/**
 * Represents an error that occurs when a request cannot be handled due to a service version mismatch.
 *
 * @sealed
 */
var ServiceVersionException = (function (_super) {
    __extends(ServiceVersionException, _super);
    function ServiceVersionException(message, innerException) {
        if (message === void 0) { message = null; }
        if (innerException === void 0) { innerException = null; }
        _super.call(this, message, innerException);
    }
    return ServiceVersionException;
}(ServiceLocalException_1.ServiceLocalException));
exports.ServiceVersionException = ServiceVersionException;
