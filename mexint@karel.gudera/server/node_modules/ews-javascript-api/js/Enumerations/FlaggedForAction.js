"use strict";
(function (FlaggedForAction) {
    FlaggedForAction[FlaggedForAction["Any"] = 0] = "Any";
    FlaggedForAction[FlaggedForAction["Call"] = 1] = "Call";
    FlaggedForAction[FlaggedForAction["DoNotForward"] = 2] = "DoNotForward";
    FlaggedForAction[FlaggedForAction["FollowUp"] = 3] = "FollowUp";
    FlaggedForAction[FlaggedForAction["FYI"] = 4] = "FYI";
    FlaggedForAction[FlaggedForAction["Forward"] = 5] = "Forward";
    FlaggedForAction[FlaggedForAction["NoResponseNecessary"] = 6] = "NoResponseNecessary";
    FlaggedForAction[FlaggedForAction["Read"] = 7] = "Read";
    FlaggedForAction[FlaggedForAction["Reply"] = 8] = "Reply";
    FlaggedForAction[FlaggedForAction["ReplyToAll"] = 9] = "ReplyToAll";
    FlaggedForAction[FlaggedForAction["Review"] = 10] = "Review";
})(exports.FlaggedForAction || (exports.FlaggedForAction = {}));
var FlaggedForAction = exports.FlaggedForAction;
