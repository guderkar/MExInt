"use strict";
(function (SendInvitationsMode) {
    SendInvitationsMode[SendInvitationsMode["SendToNone"] = 0] = "SendToNone";
    SendInvitationsMode[SendInvitationsMode["SendOnlyToAll"] = 1] = "SendOnlyToAll";
    SendInvitationsMode[SendInvitationsMode["SendToAllAndSaveCopy"] = 2] = "SendToAllAndSaveCopy";
})(exports.SendInvitationsMode || (exports.SendInvitationsMode = {}));
var SendInvitationsMode = exports.SendInvitationsMode;
