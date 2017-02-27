"use strict";
(function (FolderPermissionReadAccess) {
    FolderPermissionReadAccess[FolderPermissionReadAccess["None"] = 0] = "None";
    FolderPermissionReadAccess[FolderPermissionReadAccess["TimeOnly"] = 1] = "TimeOnly";
    FolderPermissionReadAccess[FolderPermissionReadAccess["TimeAndSubjectAndLocation"] = 2] = "TimeAndSubjectAndLocation";
    FolderPermissionReadAccess[FolderPermissionReadAccess["FullDetails"] = 3] = "FullDetails";
})(exports.FolderPermissionReadAccess || (exports.FolderPermissionReadAccess = {}));
var FolderPermissionReadAccess = exports.FolderPermissionReadAccess;
