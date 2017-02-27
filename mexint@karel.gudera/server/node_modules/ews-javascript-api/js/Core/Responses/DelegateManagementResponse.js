"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DelegateUserResponse_1 = require("./DelegateUserResponse");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var ServiceError_1 = require("../../Enumerations/ServiceError");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the response to a delegate managent-related operation.
 */
var DelegateManagementResponse = (function (_super) {
    __extends(DelegateManagementResponse, _super);
    /**
     * @internal Initializes a new instance of the **DelegateManagementResponse** class.
     *
     * @param   {boolean}           readDelegateUsers   if set to *true* [read delegate users].
     * @param   {DelegateUser[]}    delegateUsers       List of existing delegate users to load.
     */
    function DelegateManagementResponse(readDelegateUsers, delegateUsers) {
        _super.call(this);
        this.readDelegateUsers = false;
        this.delegateUsers = null;
        this.delegateUserResponses = null;
        this.readDelegateUsers = readDelegateUsers;
        this.delegateUsers = delegateUsers;
    }
    Object.defineProperty(DelegateManagementResponse.prototype, "DelegateUserResponses", {
        /**
         * @internal Gets a collection of responses for each of the delegate users concerned by the operation.
         */
        get: function () {
            return this.delegateUserResponses;
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
    DelegateManagementResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (this.ErrorCode === ServiceError_1.ServiceError.NoError) {
            this.delegateUserResponses = [];
        }
        var jsResponses = responseObject[XmlElementNames_1.XmlElementNames.ResponseMessages];
        var delegateUserIndex = 0;
        for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsResponses, XmlElementNames_1.XmlElementNames.DelegateUserResponseMessageType); _i < _a.length; _i++) {
            var jsResponse = _a[_i];
            var delegateUser = null;
            if (this.readDelegateUsers && (this.delegateUsers != null)) {
                delegateUser = this.delegateUsers[delegateUserIndex];
            }
            var delegateUserResponse = new DelegateUserResponse_1.DelegateUserResponse(this.readDelegateUsers, delegateUser);
            delegateUserResponse.LoadFromXmlJsObject(jsResponse, service);
            this.delegateUserResponses.push(delegateUserResponse);
            delegateUserIndex++;
        }
    };
    return DelegateManagementResponse;
}(ServiceResponse_1.ServiceResponse));
exports.DelegateManagementResponse = DelegateManagementResponse;
