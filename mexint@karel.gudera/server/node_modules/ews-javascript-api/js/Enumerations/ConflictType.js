"use strict";
(function (ConflictType) {
    ConflictType[ConflictType["IndividualAttendeeConflict"] = 0] = "IndividualAttendeeConflict";
    ConflictType[ConflictType["GroupConflict"] = 1] = "GroupConflict";
    ConflictType[ConflictType["GroupTooBigConflict"] = 2] = "GroupTooBigConflict";
    ConflictType[ConflictType["UnknownAttendeeConflict"] = 3] = "UnknownAttendeeConflict";
})(exports.ConflictType || (exports.ConflictType = {}));
var ConflictType = exports.ConflictType;
