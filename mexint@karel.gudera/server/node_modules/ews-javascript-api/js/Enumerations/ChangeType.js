"use strict";
(function (ChangeType) {
    ChangeType[ChangeType["Create"] = 0] = "Create";
    ChangeType[ChangeType["Update"] = 1] = "Update";
    ChangeType[ChangeType["Delete"] = 2] = "Delete";
    ChangeType[ChangeType["ReadFlagChange"] = 3] = "ReadFlagChange";
})(exports.ChangeType || (exports.ChangeType = {}));
var ChangeType = exports.ChangeType;
