"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceLocalException_1 = require("./ServiceLocalException");
var PropertyException = (function (_super) {
    __extends(PropertyException, _super);
    //private name: string;
    function PropertyException(message, name, innerException) {
        if (name === void 0) { name = null; }
        if (innerException === void 0) { innerException = null; }
        _super.call(this, message, innerException);
        this.Name = name;
    }
    return PropertyException;
}(ServiceLocalException_1.ServiceLocalException));
exports.PropertyException = PropertyException;
