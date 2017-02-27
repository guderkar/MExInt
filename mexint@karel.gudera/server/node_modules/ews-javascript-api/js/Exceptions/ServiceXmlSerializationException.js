"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceLocalException_1 = require("./ServiceLocalException");
var ServiceXmlSerializationException = (function (_super) {
    __extends(ServiceXmlSerializationException, _super);
    function ServiceXmlSerializationException(message, innerException) {
        if (message === void 0) { message = null; }
        if (innerException === void 0) { innerException = null; }
        _super.call(this, message, innerException);
    }
    return ServiceXmlSerializationException;
}(ServiceLocalException_1.ServiceLocalException));
exports.ServiceXmlSerializationException = ServiceXmlSerializationException;
