"use strict";
(function (SendPrompt) {
    SendPrompt[SendPrompt["None"] = 0] = "None";
    SendPrompt[SendPrompt["Send"] = 1] = "Send";
    SendPrompt[SendPrompt["VotingOption"] = 2] = "VotingOption";
})(exports.SendPrompt || (exports.SendPrompt = {}));
var SendPrompt = exports.SendPrompt;
