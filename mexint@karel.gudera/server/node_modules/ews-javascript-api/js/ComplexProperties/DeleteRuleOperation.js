"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsUtilities_1 = require("../Core/EwsUtilities");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var RuleOperation_1 = require("./RuleOperation");
/**
 * Represents an operation to delete an existing rule.
 *
 * @sealed
 */
var DeleteRuleOperation = (function (_super) {
    __extends(DeleteRuleOperation, _super);
    function DeleteRuleOperation(ruleId) {
        if (ruleId === void 0) { ruleId = null; }
        _super.call(this);
        this.ruleId = ruleId;
    }
    Object.defineProperty(DeleteRuleOperation.prototype, "RuleId", {
        /**
         * Gets or sets the Id of the rule to delete.
         */
        get: function () {
            return this.ruleId;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.ruleId; }, setValue: function (updateValue) { _this.ruleId = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeleteRuleOperation.prototype, "XmlElementName", {
        /**
         * @internal Gets the Xml element name of the DeleteRuleOperation object.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.DeleteRuleOperation;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    DeleteRuleOperation.prototype.InternalValidate = function () {
        EwsUtilities_1.EwsUtilities.ValidateParam(this.ruleId, "RuleId");
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    DeleteRuleOperation.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.RuleId, this.RuleId);
    };
    return DeleteRuleOperation;
}(RuleOperation_1.RuleOperation));
exports.DeleteRuleOperation = DeleteRuleOperation;
