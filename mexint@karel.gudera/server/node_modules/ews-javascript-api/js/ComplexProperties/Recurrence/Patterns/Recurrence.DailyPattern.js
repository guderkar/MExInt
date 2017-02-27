"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../../Core/XmlElementNames");
var Recurrence_IntervalPattern_1 = require("./Recurrence.IntervalPattern");
/**
 * Represents a recurrence pattern where each occurrence happens a specific number of days after the previous one.
 */
var DailyPattern = (function (_super) {
    __extends(DailyPattern, _super);
    function DailyPattern(startDate, interval) {
        if (arguments.length === 0) {
            _super.call(this);
            return;
        }
        _super.call(this, startDate, interval);
    }
    Object.defineProperty(DailyPattern.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.DailyRecurrence;
        },
        enumerable: true,
        configurable: true
    });
    return DailyPattern;
}(Recurrence_IntervalPattern_1.IntervalPattern));
exports.DailyPattern = DailyPattern;
