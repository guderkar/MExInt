"use strict";
(function (TaskDelegationState) {
    TaskDelegationState[TaskDelegationState["NoDelegation"] = 0] = "NoDelegation";
    TaskDelegationState[TaskDelegationState["Unknown"] = 1] = "Unknown";
    TaskDelegationState[TaskDelegationState["Accepted"] = 2] = "Accepted";
    TaskDelegationState[TaskDelegationState["Declined"] = 3] = "Declined";
})(exports.TaskDelegationState || (exports.TaskDelegationState = {}));
var TaskDelegationState = exports.TaskDelegationState;
