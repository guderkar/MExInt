"use strict";
var UnifiedMessaging = (function () {
    function UnifiedMessaging(service) {
        this.service = service;
    }
    UnifiedMessaging.prototype.DisconnectPhoneCall = function (id) { throw new Error("UnifiedMessaging.ts - DisconnectPhoneCall : Not implemented."); };
    UnifiedMessaging.prototype.GetPhoneCallInformation = function (id) { throw new Error("UnifiedMessaging.ts - GetPhoneCallInformation : Not implemented."); };
    UnifiedMessaging.prototype.PlayOnPhone = function (itemId, dialString) { throw new Error("UnifiedMessaging.ts - PlayOnPhone : Not implemented."); };
    return UnifiedMessaging;
}());
exports.UnifiedMessaging = UnifiedMessaging;
