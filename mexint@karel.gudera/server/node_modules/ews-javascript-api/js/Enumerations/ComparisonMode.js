"use strict";
(function (ComparisonMode) {
    ComparisonMode[ComparisonMode["Exact"] = 0] = "Exact";
    ComparisonMode[ComparisonMode["IgnoreCase"] = 1] = "IgnoreCase";
    ComparisonMode[ComparisonMode["IgnoreNonSpacingCharacters"] = 2] = "IgnoreNonSpacingCharacters";
    ComparisonMode[ComparisonMode["IgnoreCaseAndNonSpacingCharacters"] = 3] = "IgnoreCaseAndNonSpacingCharacters";
})(exports.ComparisonMode || (exports.ComparisonMode = {}));
var ComparisonMode = exports.ComparisonMode;
