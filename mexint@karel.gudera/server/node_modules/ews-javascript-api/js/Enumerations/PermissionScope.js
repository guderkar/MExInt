"use strict";
(function (PermissionScope) {
    PermissionScope[PermissionScope["None"] = 0] = "None";
    PermissionScope[PermissionScope["Owned"] = 1] = "Owned";
    PermissionScope[PermissionScope["All"] = 2] = "All";
})(exports.PermissionScope || (exports.PermissionScope = {}));
var PermissionScope = exports.PermissionScope;
