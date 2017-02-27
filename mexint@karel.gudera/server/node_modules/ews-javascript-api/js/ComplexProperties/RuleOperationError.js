"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var RuleErrorCollection_1 = require("./RuleErrorCollection");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an error that occurred while processing a rule operation.
 *
 * @sealed
 */
var RuleOperationError = (function (_super) {
    __extends(RuleOperationError, _super);
    /**
     * @internal Initializes a new instance of the **RuleOperationError** class.
     */
    function RuleOperationError() {
        _super.call(this);
        this.___implementsInterface = ["IEnumerable<Rule>"];
        /**
         * Index of the operation mapping to the error.
         */
        this.operationIndex = 0;
        /**
         * RuleOperation object mapping to the error.
         */
        this.operation = null;
        /**
         * RuleError Collection.
         */
        this.ruleErrors = null;
    }
    Object.defineProperty(RuleOperationError.prototype, "Operation", {
        /**
         * Gets the operation that resulted in an error.
         */
        get: function () {
            return this.operation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuleOperationError.prototype, "Count", {
        /**
         * Gets the number of rule errors in the list.
         */
        get: function () {
            return this.ruleErrors.Count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the rule error at the specified index.
     *
     * @param   {number}   index   The index of the rule error to get.
     * @return  {RuleError}	The rule error at the specified index.
     */
    RuleOperationError.prototype.__thisIndexer = function (index) {
        if (index < 0 || index >= this.ruleErrors.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("Index");
        }
        return this.ruleErrors.__thisIndexer(index);
    };
    //GetEnumerator(): RuleError[] /*System.Collections.Generic.IEnumerator<RuleError>*/{ throw new Error("RuleOperationError.ts - GetEnumerator : Not implemented.");}
    /**
     * @internal Set operation property by the index of a given opeation enumerator.
     *
     * @param   {RuleOperation[]}   operations   Operation enumerator.
     */
    RuleOperationError.prototype.SetOperationByIndex = function (operations) {
        this.operation = operations[this.operationIndex];
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    RuleOperationError.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.OperationIndex:
                    this.operationIndex = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.ValidationErrors:
                    this.ruleErrors = new RuleErrorCollection_1.RuleErrorCollection();
                    this.ruleErrors.CreateFromXmlJsObjectCollection(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    return RuleOperationError;
}(ComplexProperty_1.ComplexProperty));
exports.RuleOperationError = RuleOperationError;
