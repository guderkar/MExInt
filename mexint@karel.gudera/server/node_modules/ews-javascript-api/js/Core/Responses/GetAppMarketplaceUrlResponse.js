"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal  Represents the response to a GetAppMarketplaceUrl operation
 *
 * @sealed
 */
var GetAppMarketplaceUrlResponse = (function (_super) {
    __extends(GetAppMarketplaceUrlResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetAppMarketplaceUrlResponse** class.
     */
    function GetAppMarketplaceUrlResponse() {
        _super.call(this);
    }
    Object.defineProperty(GetAppMarketplaceUrlResponse.prototype, "AppMarketplaceUrl", {
        /**
         * App Marketplace Url
         */
        get: function () {
            return this.appMarketplaceUrl;
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
    GetAppMarketplaceUrlResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        this.appMarketplaceUrl = jsObject[XmlElementNames_1.XmlElementNames.AppMarketplaceUrl];
    };
    return GetAppMarketplaceUrlResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetAppMarketplaceUrlResponse = GetAppMarketplaceUrlResponse;
