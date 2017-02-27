"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MeetingRequestsDeliveryScope_1 = require("../../Enumerations/MeetingRequestsDeliveryScope");
var ServiceError_1 = require("../../Enumerations/ServiceError");
var XmlElementNames_1 = require("../XmlElementNames");
var DelegateManagementResponse_1 = require("./DelegateManagementResponse");
/**
 * @internal Represents the response to a delegate user retrieval operation.
 *
 * @sealed
 */
var GetDelegateResponse = (function (_super) {
    __extends(GetDelegateResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetDelegateResponse** class.
     *
     * @param   {boolean}   readDelegateUsers   if set to *true* [read delegate users].
     */
    function GetDelegateResponse(readDelegateUsers) {
        _super.call(this, readDelegateUsers, null);
        this.meetingRequestsDeliveryScope = MeetingRequestsDeliveryScope_1.MeetingRequestsDeliveryScope.NoForward;
    }
    Object.defineProperty(GetDelegateResponse.prototype, "MeetingRequestsDeliveryScope", {
        /**
         * @internal Gets a value indicating if and how meeting requests are delivered to delegates.
         */
        get: function () {
            return this.meetingRequestsDeliveryScope;
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
    GetDelegateResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        _super.prototype.ReadElementsFromXmlJsObject.call(this, responseObject, service);
        if (this.ErrorCode == ServiceError_1.ServiceError.NoError) {
            if (responseObject[XmlElementNames_1.XmlElementNames.DeliverMeetingRequests]) {
                this.meetingRequestsDeliveryScope = MeetingRequestsDeliveryScope_1.MeetingRequestsDeliveryScope[responseObject[XmlElementNames_1.XmlElementNames.DeliverMeetingRequests]];
            }
        }
    };
    return GetDelegateResponse;
}(DelegateManagementResponse_1.DelegateManagementResponse));
exports.GetDelegateResponse = GetDelegateResponse;
