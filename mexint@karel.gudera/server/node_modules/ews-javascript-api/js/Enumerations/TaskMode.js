"use strict";
(function (TaskMode) {
    TaskMode[TaskMode["Normal"] = 0] = "Normal";
    TaskMode[TaskMode["Request"] = 1] = "Request";
    TaskMode[TaskMode["RequestAccepted"] = 2] = "RequestAccepted";
    TaskMode[TaskMode["RequestDeclined"] = 3] = "RequestDeclined";
    TaskMode[TaskMode["Update"] = 4] = "Update";
    TaskMode[TaskMode["SelfDelegated"] = 5] = "SelfDelegated";
})(exports.TaskMode || (exports.TaskMode = {}));
var TaskMode = exports.TaskMode;
