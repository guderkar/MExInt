"use strict";
(function (ContainmentMode) {
    ContainmentMode[ContainmentMode["FullString"] = 0] = "FullString";
    ContainmentMode[ContainmentMode["Prefixed"] = 1] = "Prefixed";
    ContainmentMode[ContainmentMode["Substring"] = 2] = "Substring";
    ContainmentMode[ContainmentMode["PrefixOnWords"] = 3] = "PrefixOnWords";
    ContainmentMode[ContainmentMode["ExactPhrase"] = 4] = "ExactPhrase";
})(exports.ContainmentMode || (exports.ContainmentMode = {}));
var ContainmentMode = exports.ContainmentMode;
