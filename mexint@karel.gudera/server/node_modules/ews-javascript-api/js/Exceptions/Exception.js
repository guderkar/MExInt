"use strict";
//make necessary changes if needed
var Exception = (function () {
    function Exception(message, innerException) {
        if (message === void 0) { message = null; }
        if (innerException === void 0) { innerException = null; }
        this.InnerException = null;
        this.InnerException = innerException;
        this.message = message;
    }
    Object.defineProperty(Exception.prototype, "Message", {
        get: function () {
            return this.message;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @override user JSON.stringify for now, todo: impelemtn real Exception tostring
     */
    Exception.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Exception;
}());
exports.Exception = Exception;
