"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClientAppMetadata_1 = require("./ClientAppMetadata");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a app in GetAppManifests response.
 *
 * @sealed
 */
var ClientApp = (function (_super) {
    __extends(ClientApp, _super);
    /**
     * Initializes a new instance of the **ClientApp** class.
     */
    function ClientApp() {
        _super.call(this);
        this.Namespace = XmlNamespace_1.XmlNamespace.Types;
    }
    //ReadToXmlDocument(reader: EwsServiceXmlReader): any { throw new Error("ClientApp.ts - ReadToXmlDocument : Not implemented."); } //not needed.
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ClientApp.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        if (jsObject[XmlElementNames_1.XmlElementNames.Manifest]) {
            this.Manifest = jsObject[XmlElementNames_1.XmlElementNames.Manifest];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.Metadata]) {
            this.Metadata = new ClientAppMetadata_1.ClientAppMetadata();
            this.Metadata.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.Metadata], service);
        }
    };
    return ClientApp;
}(ComplexProperty_1.ComplexProperty));
exports.ClientApp = ClientApp;
