"use strict";
(function (ResponseMessageType) {
    ResponseMessageType[ResponseMessageType["Reply"] = 0] = "Reply";
    ResponseMessageType[ResponseMessageType["ReplyAll"] = 1] = "ReplyAll";
    ResponseMessageType[ResponseMessageType["Forward"] = 2] = "Forward";
})(exports.ResponseMessageType || (exports.ResponseMessageType = {}));
var ResponseMessageType = exports.ResponseMessageType;
