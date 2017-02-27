"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DiscoverySearchConfiguration_1 = require("../../MailboxSearch/DiscoverySearchConfiguration");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the GetDiscoverySearchConfiguration response.
 *
 * @sealed
 */
var GetDiscoverySearchConfigurationResponse = (function (_super) {
    __extends(GetDiscoverySearchConfigurationResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetDiscoverySearchConfigurationResponse** class.
     */
    function GetDiscoverySearchConfigurationResponse() {
        _super.call(this);
        this.configurations = [];
    }
    Object.defineProperty(GetDiscoverySearchConfigurationResponse.prototype, "DiscoverySearchConfigurations", {
        /**
         * Searchable mailboxes result
         */
        get: function () {
            return this.configurations;
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
    GetDiscoverySearchConfigurationResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        this.configurations.splice(0);
        //super.ReadElementsFromXmlJsObject(jsObject, service);
        if (jsObject[XmlElementNames_1.XmlElementNames.DiscoverySearchConfigurations]) {
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.DiscoverySearchConfigurations], XmlElementNames_1.XmlElementNames.DiscoverySearchConfiguration); _i < _a.length; _i++) {
                var searchConfiguration = _a[_i];
                this.configurations.push(DiscoverySearchConfiguration_1.DiscoverySearchConfiguration.LoadFromXmlJsObject(searchConfiguration, service));
            }
        }
    };
    return GetDiscoverySearchConfigurationResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetDiscoverySearchConfigurationResponse = GetDiscoverySearchConfigurationResponse;
