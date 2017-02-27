"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var TimeChange = (function (_super) {
    __extends(TimeChange, _super);
    function TimeChange() {
        _super.apply(this, arguments);
    }
    TimeChange.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("TimeChange.ts - ReadAttributesFromXml : Not implemented."); };
    TimeChange.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("TimeChange.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    TimeChange.prototype.WriteAttributesToXml = function (writer) { throw new Error("TimeChange.ts - WriteAttributesToXml : Not implemented."); };
    TimeChange.prototype.WriteElementsToXml = function (writer) { throw new Error("TimeChange.ts - WriteElementsToXml : Not implemented."); };
    return TimeChange;
}(ComplexProperty_1.ComplexProperty));
exports.TimeChange = TimeChange;
//}
