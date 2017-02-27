"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsLogging_1 = require("../EwsLogging");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the base response class to subscription creation operations.
 *
 * @sealed
 * @typeparam	{TSubscription}		The type of the subscription.
 */
var SubscribeResponse = (function (_super) {
    __extends(SubscribeResponse, _super);
    /**
     * @internal Initializes a new instance of the **SubscribeResponse<TSubscription>** class.
     *
     * @param   {TSubscription}   subscription   The subscription.
     */
    function SubscribeResponse(subscription) {
        _super.call(this);
        EwsLogging_1.EwsLogging.Assert(subscription != null, "SubscribeResponse.ctor", "subscription is null");
        this.subscription = subscription;
    }
    Object.defineProperty(SubscribeResponse.prototype, "Subscription", {
        /**
         * Gets the subscription that was created.
         */
        get: function () {
            return this.subscription;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               responseObject      The response object.
     * @param   {ExchangeService}   service             The service.
     */
    SubscribeResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.subscription.LoadFromXmlJsObject(responseObject, service);
    };
    return SubscribeResponse;
}(ServiceResponse_1.ServiceResponse));
exports.SubscribeResponse = SubscribeResponse;
