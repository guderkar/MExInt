"use strict";
(function (FolderPermissionLevel) {
    FolderPermissionLevel[FolderPermissionLevel["None"] = 0] = "None";
    FolderPermissionLevel[FolderPermissionLevel["Owner"] = 1] = "Owner";
    FolderPermissionLevel[FolderPermissionLevel["PublishingEditor"] = 2] = "PublishingEditor";
    FolderPermissionLevel[FolderPermissionLevel["Editor"] = 3] = "Editor";
    FolderPermissionLevel[FolderPermissionLevel["PublishingAuthor"] = 4] = "PublishingAuthor";
    FolderPermissionLevel[FolderPermissionLevel["Author"] = 5] = "Author";
    FolderPermissionLevel[FolderPermissionLevel["NoneditingAuthor"] = 6] = "NoneditingAuthor";
    FolderPermissionLevel[FolderPermissionLevel["Reviewer"] = 7] = "Reviewer";
    FolderPermissionLevel[FolderPermissionLevel["Contributor"] = 8] = "Contributor";
    FolderPermissionLevel[FolderPermissionLevel["FreeBusyTimeOnly"] = 9] = "FreeBusyTimeOnly";
    FolderPermissionLevel[FolderPermissionLevel["FreeBusyTimeAndSubjectAndLocation"] = 10] = "FreeBusyTimeAndSubjectAndLocation";
    FolderPermissionLevel[FolderPermissionLevel["Custom"] = 11] = "Custom";
})(exports.FolderPermissionLevel || (exports.FolderPermissionLevel = {}));
var FolderPermissionLevel = exports.FolderPermissionLevel;
