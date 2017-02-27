"use strict";
(function (DelegateFolderPermissionLevel) {
    DelegateFolderPermissionLevel[DelegateFolderPermissionLevel["None"] = 0] = "None";
    DelegateFolderPermissionLevel[DelegateFolderPermissionLevel["Editor"] = 1] = "Editor";
    DelegateFolderPermissionLevel[DelegateFolderPermissionLevel["Reviewer"] = 2] = "Reviewer";
    DelegateFolderPermissionLevel[DelegateFolderPermissionLevel["Author"] = 3] = "Author";
    DelegateFolderPermissionLevel[DelegateFolderPermissionLevel["Custom"] = 4] = "Custom";
})(exports.DelegateFolderPermissionLevel || (exports.DelegateFolderPermissionLevel = {}));
var DelegateFolderPermissionLevel = exports.DelegateFolderPermissionLevel;
