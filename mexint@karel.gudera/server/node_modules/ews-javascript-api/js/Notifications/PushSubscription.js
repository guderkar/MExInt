"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SubscriptionBase_1 = require("./SubscriptionBase");
/**
 * Represents a push subscriptions.
 *
 * @sealed
 */
var PushSubscription = (function (_super) {
    __extends(PushSubscription, _super);
    /**
     * @internal Initializes a new instance of the **PushSubscription** class.
     *
     * @param   {ExchangeService}   service     The service.
     */
    function PushSubscription(service) {
        _super.call(this, service);
    }
    return PushSubscription;
}(SubscriptionBase_1.SubscriptionBase));
exports.PushSubscription = PushSubscription;
