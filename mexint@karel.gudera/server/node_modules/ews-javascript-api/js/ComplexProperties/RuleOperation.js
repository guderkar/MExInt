"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an operation to be performed on a rule.
 */
var RuleOperation = (function (_super) {
    __extends(RuleOperation, _super);
    /**
     * @internal Initializes a new instance of the **RuleOperation** class.
     */
    function RuleOperation() {
        _super.call(this);
    }
    Object.defineProperty(RuleOperation.prototype, "XmlElementName", {
        /**
         * @internal Gets the XML element name of the rule operation.
         */
        get: function () {
            throw new Error("abstract - must implement");
        },
        enumerable: true,
        configurable: true
    });
    return RuleOperation;
}(ComplexProperty_1.ComplexProperty));
exports.RuleOperation = RuleOperation;
