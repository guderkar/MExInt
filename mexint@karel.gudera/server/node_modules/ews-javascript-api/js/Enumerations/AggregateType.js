"use strict";
/** Defines the type of aggregation to perform.*/
(function (AggregateType) {
    /** The maximum value is calculated. */
    AggregateType[AggregateType["Minimum"] = 0] = "Minimum";
    /** The minimum value is calculated. */
    AggregateType[AggregateType["Maximum"] = 1] = "Maximum";
})(exports.AggregateType || (exports.AggregateType = {}));
var AggregateType = exports.AggregateType;
