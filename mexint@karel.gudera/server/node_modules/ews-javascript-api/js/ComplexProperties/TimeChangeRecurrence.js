"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var TimeChangeRecurrence = (function (_super) {
    __extends(TimeChangeRecurrence, _super);
    function TimeChangeRecurrence() {
        _super.apply(this, arguments);
    }
    TimeChangeRecurrence.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("TimeChangeRecurrence.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    TimeChangeRecurrence.prototype.WriteElementsToXml = function (writer) { throw new Error("TimeChangeRecurrence.ts - WriteElementsToXml : Not implemented."); };
    return TimeChangeRecurrence;
}(ComplexProperty_1.ComplexProperty));
exports.TimeChangeRecurrence = TimeChangeRecurrence;
//}
