"use strict";
var ExtensionMethods_1 = require("../ExtensionMethods");
var isNode = (typeof window === 'undefined');
var util = undefined;
if (isNode) {
    util = require('util');
}
else {
    util = {
        inspect: function (obj, option) { return obj; }
    };
}
var EwsLogging = (function () {
    function EwsLogging() {
    }
    EwsLogging.Assert = function (condition, caller, message) {
        if (this.DebugLogEnabled && !condition)
            console.log(ExtensionMethods_1.StringHelper.Format("[{0}] {1}", caller, message));
    };
    EwsLogging.Log = function (message, always, expandObject) {
        if (always === void 0) { always = false; }
        if (expandObject === void 0) { expandObject = false; }
        if (this.DebugLogEnabled || always) {
            if (expandObject)
                console.log(util.inspect(message, { showHidden: false, depth: null, colors: true }));
            else
                console.log(message);
        }
    };
    EwsLogging.DebugLog = function (message, expandObject) {
        if (expandObject === void 0) { expandObject = false; }
        if (this.DebugLogEnabled) {
            if (expandObject)
                console.log(util.inspect(message, { showHidden: false, depth: null, colors: true }));
            else
                console.log(message);
        }
    };
    EwsLogging.DebugLogEnabled = true;
    return EwsLogging;
}());
exports.EwsLogging = EwsLogging;
