"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RuleOperationErrorCollection_1 = require("../../ComplexProperties/RuleOperationErrorCollection");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the response to a UpdateInboxRulesResponse operation.
 *
 * @sealed
 */
var UpdateInboxRulesResponse = (function (_super) {
    __extends(UpdateInboxRulesResponse, _super);
    /**
     * @internal Initializes a new instance of the **UpdateInboxRulesResponse** class.
     */
    function UpdateInboxRulesResponse() {
        _super.call(this);
        /**
         * Rule operation error collection.
         */
        this.errors = null;
        this.errors = new RuleOperationErrorCollection_1.RuleOperationErrorCollection();
    }
    Object.defineProperty(UpdateInboxRulesResponse.prototype, "Errors", {
        /**
         * @internal Gets the rule operation errors in the response.
         */
        get: function () {
            return this.errors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads extra error details from XML
     *
     * @param   {any}   			responseObject      Json Object converted from XML.
     * @param   {ExchangeService}   service             The service.
     */
    UpdateInboxRulesResponse.prototype.LoadExtraErrorDetailsFromXmlJsObject = function (responseObject, service) {
        _super.prototype.LoadExtraErrorDetailsFromXmlJsObject.call(this, responseObject, service);
        if (responseObject[XmlElementNames_1.XmlElementNames.RuleOperationErrors]) {
            this.errors.CreateFromXmlJsObjectCollection(responseObject[XmlElementNames_1.XmlElementNames.RuleOperationErrors][XmlElementNames_1.XmlElementNames.RuleOperationError], service);
        }
    };
    return UpdateInboxRulesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.UpdateInboxRulesResponse = UpdateInboxRulesResponse;
