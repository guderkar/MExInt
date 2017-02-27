"use strict";
(function (ItemFlagStatus) {
    ItemFlagStatus[ItemFlagStatus["NotFlagged"] = 0] = "NotFlagged";
    ItemFlagStatus[ItemFlagStatus["Flagged"] = 1] = "Flagged";
    ItemFlagStatus[ItemFlagStatus["Complete"] = 2] = "Complete";
})(exports.ItemFlagStatus || (exports.ItemFlagStatus = {}));
var ItemFlagStatus = exports.ItemFlagStatus;
