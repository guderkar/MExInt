"use strict";
var AutodiscoverError = (function () {
    function AutodiscoverError() {
    }
    AutodiscoverError.prototype.Parse = function (reader) { throw new Error("AutodiscoverError.ts - Parse : Not implemented."); };
    return AutodiscoverError;
}());
exports.AutodiscoverError = AutodiscoverError;
