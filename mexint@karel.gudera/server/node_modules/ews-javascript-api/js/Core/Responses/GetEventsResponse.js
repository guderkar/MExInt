"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GetEventsResults_1 = require("../../Notifications/GetEventsResults");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the response to a subscription event retrieval operation.
 *
 * @sealed
 */
var GetEventsResponse = (function (_super) {
    __extends(GetEventsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetEventsResponse** class.
     */
    function GetEventsResponse() {
        _super.call(this);
        this.results = new GetEventsResults_1.GetEventsResults();
    }
    Object.defineProperty(GetEventsResponse.prototype, "Results", {
        /**
         * @internal Gets event results from subscription.
         */
        get: function () {
            return this.results;
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
    GetEventsResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        this.results.LoadFromXmlJsObject(jsObject, service);
    };
    return GetEventsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetEventsResponse = GetEventsResponse;
