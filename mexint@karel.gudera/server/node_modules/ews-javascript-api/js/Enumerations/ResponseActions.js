"use strict";
(function (ResponseActions) {
    ResponseActions[ResponseActions["None"] = 0] = "None";
    ResponseActions[ResponseActions["Accept"] = 1] = "Accept";
    ResponseActions[ResponseActions["TentativelyAccept"] = 2] = "TentativelyAccept";
    ResponseActions[ResponseActions["Decline"] = 4] = "Decline";
    ResponseActions[ResponseActions["Reply"] = 8] = "Reply";
    ResponseActions[ResponseActions["ReplyAll"] = 16] = "ReplyAll";
    ResponseActions[ResponseActions["Forward"] = 32] = "Forward";
    ResponseActions[ResponseActions["Cancel"] = 64] = "Cancel";
    ResponseActions[ResponseActions["RemoveFromCalendar"] = 128] = "RemoveFromCalendar";
    ResponseActions[ResponseActions["SuppressReadReceipt"] = 256] = "SuppressReadReceipt";
    ResponseActions[ResponseActions["PostReply"] = 512] = "PostReply";
})(exports.ResponseActions || (exports.ResponseActions = {}));
var ResponseActions = exports.ResponseActions;
