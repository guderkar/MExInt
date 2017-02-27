"use strict";
/**
 * Provides data to a StreamingSubscriptionConnection's OnNotificationEvent event.
 */
var NotificationEventArgs = (function () {
    /**
     * @internal Initializes a new instance of the **NotificationEventArgs** class.
     *
     * @param   {StreamingSubscription}   	subscription   The subscription for which notifications have been received.
     * @param   {NotificationEvent[]}   	events         The events that were received.
     */
    function NotificationEventArgs(subscription, events) {
        this.Events = events;
        this.Subscription = subscription;
    }
    return NotificationEventArgs;
}());
exports.NotificationEventArgs = NotificationEventArgs;
