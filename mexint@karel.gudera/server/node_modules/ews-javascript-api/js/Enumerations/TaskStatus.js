"use strict";
(function (TaskStatus) {
    TaskStatus[TaskStatus["NotStarted"] = 0] = "NotStarted";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Completed"] = 2] = "Completed";
    TaskStatus[TaskStatus["WaitingOnOthers"] = 3] = "WaitingOnOthers";
    TaskStatus[TaskStatus["Deferred"] = 4] = "Deferred";
})(exports.TaskStatus || (exports.TaskStatus = {}));
var TaskStatus = exports.TaskStatus;
