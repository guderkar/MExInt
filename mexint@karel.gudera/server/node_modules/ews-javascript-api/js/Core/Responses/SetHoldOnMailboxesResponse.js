"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MailboxHoldResult_1 = require("../../MailboxSearch/MailboxHoldResult");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the SetHoldOnMailboxes response.
 *
 * @sealed
 */
var SetHoldOnMailboxesResponse = (function (_super) {
    __extends(SetHoldOnMailboxesResponse, _super);
    /**
     * @internal Initializes a new instance of the **SetHoldOnMailboxesResponse** class.
     */
    function SetHoldOnMailboxesResponse() {
        _super.call(this);
        this.holdResult = null;
    }
    Object.defineProperty(SetHoldOnMailboxesResponse.prototype, "HoldResult", {
        /**
         * Mailbox hold result
         */
        get: function () {
            return this.holdResult;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    SetHoldOnMailboxesResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        _super.prototype.ReadElementsFromXmlJsObject.call(this, jsObject, service);
        if (jsObject[XmlElementNames_1.XmlElementNames.MailboxHoldResult]) {
            this.holdResult = MailboxHoldResult_1.MailboxHoldResult.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.MailboxHoldResult], service);
        }
    };
    return SetHoldOnMailboxesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.SetHoldOnMailboxesResponse = SetHoldOnMailboxesResponse;
