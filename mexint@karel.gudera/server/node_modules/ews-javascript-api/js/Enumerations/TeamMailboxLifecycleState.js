"use strict";
(function (TeamMailboxLifecycleState) {
    TeamMailboxLifecycleState[TeamMailboxLifecycleState["Active"] = 0] = "Active";
    TeamMailboxLifecycleState[TeamMailboxLifecycleState["Closed"] = 1] = "Closed";
    TeamMailboxLifecycleState[TeamMailboxLifecycleState["Unlinked"] = 2] = "Unlinked";
    TeamMailboxLifecycleState[TeamMailboxLifecycleState["PendingDelete"] = 3] = "PendingDelete";
})(exports.TeamMailboxLifecycleState || (exports.TeamMailboxLifecycleState = {}));
var TeamMailboxLifecycleState = exports.TeamMailboxLifecycleState;
