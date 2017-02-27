"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DelegateUser_1 = require("../../ComplexProperties/DelegateUser");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the response to an individual delegate user manipulation (add, remove, update) operation.
 *
 * @sealed
 */
var DelegateUserResponse = (function (_super) {
    __extends(DelegateUserResponse, _super);
    /**
     * @internal Initializes a new instance of the **DelegateUserResponse** class.
     *
     * @param   {boolean}       readDelegateUsers   if set to *true* [read delegate users].
     * @param   {DelegateUser}  delegateUser        Existing DelegateUser to use (may be null).
     */
    function DelegateUserResponse(readDelegateUser, delegateUser) {
        _super.call(this);
        this.readDelegateUser = false;
        this.delegateUser = null;
        this.readDelegateUser = readDelegateUser;
        this.delegateUser = delegateUser;
    }
    Object.defineProperty(DelegateUserResponse.prototype, "DelegateUser", {
        /**
         * The delegate user that was involved in the operation.
         */
        get: function () {
            return this.delegateUser;
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
    DelegateUserResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (this.readDelegateUser) {
            if (this.delegateUser == null) {
                this.delegateUser = new DelegateUser_1.DelegateUser();
            }
            this.delegateUser.LoadFromXmlJsObject(responseObject[XmlElementNames_1.XmlElementNames.DelegateUser], service);
        }
    };
    return DelegateUserResponse;
}(ServiceResponse_1.ServiceResponse));
exports.DelegateUserResponse = DelegateUserResponse;
