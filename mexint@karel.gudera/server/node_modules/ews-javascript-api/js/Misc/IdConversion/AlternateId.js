"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExtensionMethods_1 = require("../../ExtensionMethods");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var IdFormat_1 = require("../../Enumerations/IdFormat");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var AlternateIdBase_1 = require("./AlternateIdBase");
/**
 * Represents an Id expressed in a specific format.
 */
var AlternateId = (function (_super) {
    __extends(AlternateId, _super);
    function AlternateId(format, id, mailbox, isArchive) {
        if (format === void 0) { format = IdFormat_1.IdFormat.EwsLegacyId; }
        if (id === void 0) { id = null; }
        if (mailbox === void 0) { mailbox = null; }
        if (isArchive === void 0) { isArchive = false; }
        _super.call(this, format);
        /**
         * Gets or sets the Id.
         */
        this.UniqueId = null;
        /**
         * Gets or sets the mailbox to which the Id belongs.
         */
        this.Mailbox = null;
        /**
         * Gets or sets the type (primary or archive) mailbox to which the Id belongs.
         */
        this.IsArchive = false;
        this.UniqueId = id;
        this.Mailbox = mailbox;
        this.IsArchive = isArchive;
    }
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    AlternateId.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.AlternateId;
    };
    /**
     * @internal Validate this instance.
     */
    AlternateId.prototype.InternalValidate = function () {
        EwsUtilities_1.EwsUtilities.ValidateParam(this.Mailbox, "mailbox");
    };
    /**
     * @internal Loads the attributes from Xml JsObject.
     *
     * @param   {any}   responseObject   The response object.
     */
    AlternateId.prototype.LoadAttributesFromXmlJsObject = function (responseObject) {
        _super.prototype.LoadAttributesFromXmlJsObject.call(this, responseObject);
        this.UniqueId = responseObject[XmlAttributeNames_1.XmlAttributeNames.Id];
        this.Mailbox = responseObject[XmlAttributeNames_1.XmlAttributeNames.Mailbox];
        if (responseObject[XmlAttributeNames_1.XmlAttributeNames.IsArchive]) {
            this.IsArchive = ExtensionMethods_1.Convert.toBool(responseObject[XmlAttributeNames_1.XmlAttributeNames.IsArchive]);
        }
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    AlternateId.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, this.UniqueId);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Mailbox, this.Mailbox);
        // this is optional attribute will default false so we will write
        // it only if it is true
        if (this.IsArchive) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.IsArchive, true);
        }
    };
    /**
     * @internal Name of schema type used for AlternateId.
     */
    AlternateId.SchemaTypeName = "AlternateIdType";
    return AlternateId;
}(AlternateIdBase_1.AlternateIdBase));
exports.AlternateId = AlternateId;
