"use strict";
(function (MessageDisposition) {
    MessageDisposition[MessageDisposition["SaveOnly"] = 0] = "SaveOnly";
    MessageDisposition[MessageDisposition["SendAndSaveCopy"] = 1] = "SendAndSaveCopy";
    MessageDisposition[MessageDisposition["SendOnly"] = 2] = "SendOnly";
})(exports.MessageDisposition || (exports.MessageDisposition = {}));
var MessageDisposition = exports.MessageDisposition;
