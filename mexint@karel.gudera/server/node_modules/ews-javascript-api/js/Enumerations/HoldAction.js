"use strict";
(function (HoldAction) {
    HoldAction[HoldAction["Create"] = 0] = "Create";
    HoldAction[HoldAction["Update"] = 1] = "Update";
    HoldAction[HoldAction["Remove"] = 2] = "Remove";
})(exports.HoldAction || (exports.HoldAction = {}));
var HoldAction = exports.HoldAction;
