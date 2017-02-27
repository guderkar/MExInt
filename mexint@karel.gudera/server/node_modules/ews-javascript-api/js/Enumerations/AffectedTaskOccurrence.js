"use strict";
/** Indicates which occurrence of a recurring task should be deleted*/
(function (AffectedTaskOccurrence) {
    /** All occurrences of the recurring task will be deleted.*/
    AffectedTaskOccurrence[AffectedTaskOccurrence["AllOccurrences"] = 0] = "AllOccurrences";
    /** Only the current occurrence of the recurring task will be deleted. */
    AffectedTaskOccurrence[AffectedTaskOccurrence["SpecifiedOccurrenceOnly"] = 1] = "SpecifiedOccurrenceOnly";
})(exports.AffectedTaskOccurrence || (exports.AffectedTaskOccurrence = {}));
var AffectedTaskOccurrence = exports.AffectedTaskOccurrence;
