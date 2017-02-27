"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NonIndexableItemDetailsResult_1 = require("../../MailboxSearch/NonIndexableItemDetailsResult");
var ServiceResponse_1 = require("./ServiceResponse");
var XmlElementNames_1 = require("../XmlElementNames");
/**
 * Represents the GetNonIndexableItemDetails response.
 *
 * @sealed
 */
var GetNonIndexableItemDetailsResponse = (function (_super) {
    __extends(GetNonIndexableItemDetailsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetDiscoverySearchConfigurationResponse** class.
     */
    function GetNonIndexableItemDetailsResponse() {
        _super.call(this);
        /**
         * Non indexable item result
         *
         * internal set
         */
        this.NonIndexableItemsResult = null;
    }
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetNonIndexableItemDetailsResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        //super.ReadElementsFromXmlJsObject(jsObject,service);
        if (jsObject[XmlElementNames_1.XmlElementNames.NonIndexableItemDetailsResult]) {
            this.NonIndexableItemsResult = NonIndexableItemDetailsResult_1.NonIndexableItemDetailsResult.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.NonIndexableItemDetailsResult], service);
        }
    };
    return GetNonIndexableItemDetailsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetNonIndexableItemDetailsResponse = GetNonIndexableItemDetailsResponse;
