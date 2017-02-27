"use strict";
var EwsTraceListener = (function () {
    function EwsTraceListener() {
    }
    EwsTraceListener.prototype.Trace = function (traceType, traceMessage) { throw new Error("EwsTraceListener.ts - Trace : Not implemented."); };
    return EwsTraceListener;
}());
exports.EwsTraceListener = EwsTraceListener;
