"use strict";
(function (ConflictResolutionMode) {
    ConflictResolutionMode[ConflictResolutionMode["NeverOverwrite"] = 0] = "NeverOverwrite";
    ConflictResolutionMode[ConflictResolutionMode["AutoResolve"] = 1] = "AutoResolve";
    ConflictResolutionMode[ConflictResolutionMode["AlwaysOverwrite"] = 2] = "AlwaysOverwrite";
})(exports.ConflictResolutionMode || (exports.ConflictResolutionMode = {}));
var ConflictResolutionMode = exports.ConflictResolutionMode;
