"use strict";
(function (HoldStatus) {
    HoldStatus[HoldStatus["NotOnHold"] = 0] = "NotOnHold";
    HoldStatus[HoldStatus["Pending"] = 1] = "Pending";
    HoldStatus[HoldStatus["OnHold"] = 2] = "OnHold";
    HoldStatus[HoldStatus["PartialHold"] = 3] = "PartialHold";
    HoldStatus[HoldStatus["Failed"] = 4] = "Failed";
})(exports.HoldStatus || (exports.HoldStatus = {}));
var HoldStatus = exports.HoldStatus;
