"use strict";
(function (TraceFlags) {
    TraceFlags[TraceFlags["None"] = 0] = "None";
    TraceFlags[TraceFlags["EwsRequest"] = 1] = "EwsRequest";
    TraceFlags[TraceFlags["EwsResponse"] = 2] = "EwsResponse";
    TraceFlags[TraceFlags["EwsResponseHttpHeaders"] = 4] = "EwsResponseHttpHeaders";
    TraceFlags[TraceFlags["AutodiscoverRequest"] = 8] = "AutodiscoverRequest";
    TraceFlags[TraceFlags["AutodiscoverResponse"] = 16] = "AutodiscoverResponse";
    TraceFlags[TraceFlags["AutodiscoverResponseHttpHeaders"] = 32] = "AutodiscoverResponseHttpHeaders";
    TraceFlags[TraceFlags["AutodiscoverConfiguration"] = 64] = "AutodiscoverConfiguration";
    TraceFlags[TraceFlags["DebugMessage"] = 128] = "DebugMessage";
    TraceFlags[TraceFlags["EwsRequestHttpHeaders"] = 256] = "EwsRequestHttpHeaders";
    TraceFlags[TraceFlags["AutodiscoverRequestHttpHeaders"] = 512] = "AutodiscoverRequestHttpHeaders";
    TraceFlags[TraceFlags["All"] = 9223372036854776000] = "All";
})(exports.TraceFlags || (exports.TraceFlags = {}));
var TraceFlags = exports.TraceFlags;
