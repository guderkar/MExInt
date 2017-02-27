"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Exception_1 = require("./Exception");
var ArgumentException = (function (_super) {
    __extends(ArgumentException, _super);
    function ArgumentException(message, paramNameOrInnerException, innerException) {
        if (message === void 0) { message = null; }
        if (paramNameOrInnerException === void 0) { paramNameOrInnerException = null; }
        if (innerException === void 0) { innerException = null; }
        _super.call(this, message, innerException || (paramNameOrInnerException instanceof Exception_1.Exception ? paramNameOrInnerException : null));
        this.ParamName = null;
        if (typeof paramNameOrInnerException === 'string') {
            this.ParamName = message;
        }
    }
    return ArgumentException;
}(Exception_1.Exception));
exports.ArgumentException = ArgumentException;
var ArgumentNullException = (function (_super) {
    __extends(ArgumentNullException, _super);
    function ArgumentNullException(paramNameOrMessage, paramNameOrInnerException, innerException) {
        if (paramNameOrMessage === void 0) { paramNameOrMessage = null; }
        if (paramNameOrInnerException === void 0) { paramNameOrInnerException = null; }
        if (innerException === void 0) { innerException = null; }
        var argsLength = arguments.length;
        switch (argsLength) {
            case 1:
                _super.call(this, "Argument is Null", paramNameOrMessage);
                break;
            case 2:
                if (typeof paramNameOrInnerException === 'string') {
                    _super.call(this, paramNameOrInnerException, paramNameOrMessage);
                }
                else {
                    _super.call(this, paramNameOrMessage, paramNameOrInnerException);
                }
                break;
            default:
                _super.call(this, "Argument is Null");
                break;
        }
    }
    return ArgumentNullException;
}(ArgumentException));
exports.ArgumentNullException = ArgumentNullException;
var ArgumentOutOfRangeException = (function (_super) {
    __extends(ArgumentOutOfRangeException, _super);
    function ArgumentOutOfRangeException(paramNameOrMessage, messageOrActualValueOrException, message) {
        if (message === void 0) { message = null; }
        //super((message || messageOrObjValueOrException instanceof Exception ? paramNameOrMessage : null);
        var argsLength = arguments.length;
        switch (argsLength) {
            case 0:
                _super.call(this);
                break;
            case 1:
                _super.call(this, null, paramNameOrMessage);
                break;
            case 2:
                if (typeof messageOrActualValueOrException === 'string') {
                    _super.call(this, messageOrActualValueOrException, paramNameOrMessage);
                }
                else {
                    _super.call(this, paramNameOrMessage, messageOrActualValueOrException);
                }
                break;
            case 3:
                _super.call(this, message, paramNameOrMessage);
                this.actualValue = messageOrActualValueOrException;
                break;
            default:
                _super.call(this);
                break;
        }
    }
    Object.defineProperty(ArgumentOutOfRangeException.prototype, "ActualValue", {
        /**
         * Gets the value of the argument that caused the exception.
         */
        get: function () { return this.actualValue; },
        enumerable: true,
        configurable: true
    });
    return ArgumentOutOfRangeException;
}(ArgumentException));
exports.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
