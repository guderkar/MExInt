"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EmailPosition_1 = require("../Enumerations/EmailPosition");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an ExtractedEntity object.
 */
var ExtractedEntity = (function (_super) {
    __extends(ExtractedEntity, _super);
    /**
     * Initializes a new instance of the **ExtractedEntity** class.
     */
    function ExtractedEntity() {
        _super.call(this);
        /**
         * Gets the Position.
         */
        this.Position = EmailPosition_1.EmailPosition.LatestReply;
        this.Namespace = XmlNamespace_1.XmlNamespace.Types;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    ExtractedEntity.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        if (jsObject[XmlElementNames_1.XmlElementNames.NlgEmailPosition]) {
            this.Position = EmailPosition_1.EmailPosition[jsObject[XmlElementNames_1.XmlElementNames.NlgEmailPosition]] || this.Position;
        }
        // for (let key in jsObject) {
        //     switch (key) {
        //         case XmlElementNames.NlgEmailPosition:
        //             this.Position = EmailPosition[<string>jsObject[key]] || this.Position;
        //             break;
        //         default:
        //             break;
        //     }
        // }
    };
    return ExtractedEntity;
}(ComplexProperty_1.ComplexProperty));
exports.ExtractedEntity = ExtractedEntity;
