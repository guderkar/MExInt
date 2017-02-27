"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal  Represents the response to a DisableApp operation.
 * Today this class doesn't add extra functionality. Keep this class here so future we can return extension info up-on installation complete.
 *
 * @sealed
 */
var DisableAppResponse = (function (_super) {
    __extends(DisableAppResponse, _super);
    /**
     * @internal Initializes a new instance of the **DisableAppResponse** class.
     */
    function DisableAppResponse() {
        _super.call(this);
    }
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    DisableAppResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        //does nothing, here to supress base class message about ReadElementsFromXmlJsObject when BatchProcessingStopped is false
    };
    return DisableAppResponse;
}(ServiceResponse_1.ServiceResponse));
exports.DisableAppResponse = DisableAppResponse;
