"use strict";
(function (SendCancellationsMode) {
    SendCancellationsMode[SendCancellationsMode["SendToNone"] = 0] = "SendToNone";
    SendCancellationsMode[SendCancellationsMode["SendOnlyToAll"] = 1] = "SendOnlyToAll";
    SendCancellationsMode[SendCancellationsMode["SendToAllAndSaveCopy"] = 2] = "SendToAllAndSaveCopy";
})(exports.SendCancellationsMode || (exports.SendCancellationsMode = {}));
var SendCancellationsMode = exports.SendCancellationsMode;
