"use strict";
(function (RetentionActionType) {
    RetentionActionType[RetentionActionType["None"] = 0] = "None";
    RetentionActionType[RetentionActionType["MoveToDeletedItems"] = 1] = "MoveToDeletedItems";
    RetentionActionType[RetentionActionType["MoveToFolder"] = 2] = "MoveToFolder";
    RetentionActionType[RetentionActionType["DeleteAndAllowRecovery"] = 3] = "DeleteAndAllowRecovery";
    RetentionActionType[RetentionActionType["PermanentlyDelete"] = 4] = "PermanentlyDelete";
    RetentionActionType[RetentionActionType["MarkAsPastRetentionLimit"] = 5] = "MarkAsPastRetentionLimit";
    RetentionActionType[RetentionActionType["MoveToArchive"] = 6] = "MoveToArchive";
})(exports.RetentionActionType || (exports.RetentionActionType = {}));
var RetentionActionType = exports.RetentionActionType;
