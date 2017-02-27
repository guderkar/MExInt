"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IdFormat_1 = require("../../Enumerations/IdFormat");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var AlternatePublicFolderId_1 = require("./AlternatePublicFolderId");
/**
 * Represents the Id of a public folder item expressed in a specific format.
 */
var AlternatePublicFolderItemId = (function (_super) {
    __extends(AlternatePublicFolderItemId, _super);
    function AlternatePublicFolderItemId(format, folderId, itemId) {
        if (format === void 0) { format = IdFormat_1.IdFormat.EwsLegacyId; }
        if (folderId === void 0) { folderId = null; }
        if (itemId === void 0) { itemId = null; }
        _super.call(this, format, folderId);
        this.itemId = itemId;
    }
    Object.defineProperty(AlternatePublicFolderItemId.prototype, "ItemId", {
        /**
         * The Id of the public folder item.
         */
        get: function () {
            return this.itemId;
        },
        set: function (v) {
            this.itemId = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    AlternatePublicFolderItemId.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.AlternatePublicFolderItemId;
    };
    /**
     * @internal Loads the attributes from Xml JsObject.
     *
     * @param   {any}   responseObject   The response object.
     */
    AlternatePublicFolderItemId.prototype.LoadAttributesFromXmlJsObject = function (responseObject) {
        _super.prototype.LoadAttributesFromXmlJsObject.call(this, responseObject);
        this.itemId = responseObject[XmlAttributeNames_1.XmlAttributeNames.ItemId];
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    AlternatePublicFolderItemId.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.ItemId, this.ItemId);
    };
    /**
     * @internal Schema type associated with AlternatePublicFolderItemId.
     */
    AlternatePublicFolderItemId.SchemaTypeName = "AlternatePublicFolderItemIdType";
    return AlternatePublicFolderItemId;
}(AlternatePublicFolderId_1.AlternatePublicFolderId));
exports.AlternatePublicFolderItemId = AlternatePublicFolderItemId;
