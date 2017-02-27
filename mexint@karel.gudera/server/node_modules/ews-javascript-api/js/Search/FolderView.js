"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FolderTraversal_1 = require("../Enumerations/FolderTraversal");
var OffsetBasePoint_1 = require("../Enumerations/OffsetBasePoint");
var ServiceObjectType_1 = require("../Enumerations/ServiceObjectType");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var PagedView_1 = require("./PagedView");
/**
 * Represents the view settings in a folder search operation.
 *
 * @sealed
 */
var FolderView = (function (_super) {
    __extends(FolderView, _super);
    function FolderView(pageSize, offset, offsetBasePoint) {
        if (offset === void 0) { offset = 0; }
        if (offsetBasePoint === void 0) { offsetBasePoint = OffsetBasePoint_1.OffsetBasePoint.Beginning; }
        _super.call(this, pageSize, offset, offsetBasePoint);
        this.traversal = FolderTraversal_1.FolderTraversal.Shallow;
    }
    Object.defineProperty(FolderView.prototype, "Traversal", {
        /**
         * Gets or sets the search traversal mode. Defaults to FolderTraversal.Shallow.     *
         */
        get: function () {
            return this.traversal;
        },
        set: function (value) {
            this.traversal = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    FolderView.prototype.GetServiceObjectType = function () { return ServiceObjectType_1.ServiceObjectType.Folder; };
    /**
     * @internal Gets the name of the view XML element.
     *
     * @return  {type}      XML element name.
     */
    FolderView.prototype.GetViewXmlElementName = function () { return XmlElementNames_1.XmlElementNames.IndexedPageFolderView; };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    FolderView.prototype.WriteAttributesToXml = function (writer) { writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Traversal, FolderTraversal_1.FolderTraversal[this.Traversal]); };
    return FolderView;
}(PagedView_1.PagedView));
exports.FolderView = FolderView;
