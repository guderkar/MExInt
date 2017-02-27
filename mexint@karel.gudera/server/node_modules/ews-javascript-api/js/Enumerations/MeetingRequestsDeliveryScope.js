"use strict";
(function (MeetingRequestsDeliveryScope) {
    MeetingRequestsDeliveryScope[MeetingRequestsDeliveryScope["DelegatesOnly"] = 0] = "DelegatesOnly";
    MeetingRequestsDeliveryScope[MeetingRequestsDeliveryScope["DelegatesAndMe"] = 1] = "DelegatesAndMe";
    MeetingRequestsDeliveryScope[MeetingRequestsDeliveryScope["DelegatesAndSendInformationToMe"] = 2] = "DelegatesAndSendInformationToMe";
    MeetingRequestsDeliveryScope[MeetingRequestsDeliveryScope["NoForward"] = 3] = "NoForward";
})(exports.MeetingRequestsDeliveryScope || (exports.MeetingRequestsDeliveryScope = {}));
var MeetingRequestsDeliveryScope = exports.MeetingRequestsDeliveryScope;
