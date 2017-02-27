"use strict";
/**
 * Provides data to a StreamingSubscriptionConnection's OnSubscriptionError and OnDisconnect events.
 */
var SubscriptionErrorEventArgs /*extends System.EventArgs*/ = (function () {
    /**
     * @internal Initializes a new instance of the **SubscriptionErrorEventArgs** class.
     *
     * @param   {StreamingSubscription}   	subscription   The subscription for which an error occurred. If subscription is null, the error applies to the entire connection.
     * @param   {Exception}   				exception      The exception representing the error. If exception is null, the connection was cleanly closed by the server.
     */
    function SubscriptionErrorEventArgs /*extends System.EventArgs*/(subscription, exception) {
        this.Subscription = subscription;
        this.Exception = exception;
    }
    return SubscriptionErrorEventArgs /*extends System.EventArgs*/;
}());
exports.SubscriptionErrorEventArgs /*extends System.EventArgs*/ = SubscriptionErrorEventArgs /*extends System.EventArgs*/;
