"use strict";
(function (DeleteMode) {
    DeleteMode[DeleteMode["HardDelete"] = 0] = "HardDelete";
    DeleteMode[DeleteMode["SoftDelete"] = 1] = "SoftDelete";
    DeleteMode[DeleteMode["MoveToDeletedItems"] = 2] = "MoveToDeletedItems";
})(exports.DeleteMode || (exports.DeleteMode = {}));
var DeleteMode = exports.DeleteMode;
