"use strict";
/**
 * @internal Represents a collection of arguments for the HangingServiceRequestBase.HangingRequestDisconnectHandler delegate method.
 */
var HangingRequestDisconnectEventArgs = (function () {
    /**
     * Initializes a new instance of the  class.
     *
     * @param   {HangingRequestDisconnectReason}   	reason      The reason.
     * @param   {Exception}   						exception   The exception.
     */
    function HangingRequestDisconnectEventArgs(reason, exception) {
        this.Reason = reason;
        this.Exception = exception;
    }
    return HangingRequestDisconnectEventArgs;
}());
exports.HangingRequestDisconnectEventArgs = HangingRequestDisconnectEventArgs;
