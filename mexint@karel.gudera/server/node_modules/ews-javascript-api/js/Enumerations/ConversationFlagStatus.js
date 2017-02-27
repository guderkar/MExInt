"use strict";
(function (ConversationFlagStatus) {
    ConversationFlagStatus[ConversationFlagStatus["NotFlagged"] = 0] = "NotFlagged";
    ConversationFlagStatus[ConversationFlagStatus["Flagged"] = 1] = "Flagged";
    ConversationFlagStatus[ConversationFlagStatus["Complete"] = 2] = "Complete";
})(exports.ConversationFlagStatus || (exports.ConversationFlagStatus = {}));
var ConversationFlagStatus = exports.ConversationFlagStatus;
