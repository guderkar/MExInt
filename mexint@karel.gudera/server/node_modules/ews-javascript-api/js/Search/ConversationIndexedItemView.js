"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ConversationQueryTraversal_1 = require("../Enumerations/ConversationQueryTraversal");
var EnumToExchangeVersionMappingHelper_1 = require("../Enumerations/EnumToExchangeVersionMappingHelper");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var OffsetBasePoint_1 = require("../Enumerations/OffsetBasePoint");
var OrderByCollection_1 = require("./OrderByCollection");
var ServiceObjectType_1 = require("../Enumerations/ServiceObjectType");
var ViewFilter_1 = require("../Enumerations/ViewFilter");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var PagedView_1 = require("./PagedView");
/**
 * Represents the view settings in a folder search operation.
 *
 * @sealed
 */
var ConversationIndexedItemView = (function (_super) {
    __extends(ConversationIndexedItemView, _super);
    function ConversationIndexedItemView(pageSize, offset, offsetBasePoint) {
        if (offset === void 0) { offset = 0; }
        if (offsetBasePoint === void 0) { offsetBasePoint = OffsetBasePoint_1.OffsetBasePoint.Beginning; }
        _super.call(this, pageSize, offset, offsetBasePoint);
        this.orderBy = new OrderByCollection_1.OrderByCollection();
        this.traversal = null;
        this.viewFilter = null;
    }
    Object.defineProperty(ConversationIndexedItemView.prototype, "OrderBy", {
        /**
         * Gets the properties against which the returned items should be ordered.
         */
        get: function () {
            return this.orderBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversationIndexedItemView.prototype, "Traversal", {
        /**
         * Gets or sets the conversation query traversal mode.
         *
         * @Nullable
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
    Object.defineProperty(ConversationIndexedItemView.prototype, "ViewFilter", {
        /**
         * Gets or sets the view filter.
         *
         * @Nullable
         */
        get: function () {
            return this.viewFilter;
        },
        set: function (value) {
            this.viewFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    ConversationIndexedItemView.prototype.GetServiceObjectType = function () {
        return ServiceObjectType_1.ServiceObjectType.Conversation;
    };
    /**
     * @internal Gets the name of the view XML element.
     *
     * @return  {type}      XML element name.
     */
    ConversationIndexedItemView.prototype.GetViewXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.IndexedPageItemView;
    };
    /**
     * @internal Validates this view.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    ConversationIndexedItemView.prototype.InternalValidate = function (request) {
        _super.prototype.InternalValidate.call(this, request);
        if (this.Traversal) {
            EwsUtilities_1.EwsUtilities.ValidateEnumVersionValue(EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper.ConversationQueryTraversal, this.traversal, request.Service.RequestedServerVersion);
        }
        if (this.ViewFilter) {
            EwsUtilities_1.EwsUtilities.ValidateEnumVersionValue(EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper.ViewFilter, this.viewFilter, request.Service.RequestedServerVersion);
        }
    };
    /**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    ConversationIndexedItemView.prototype.InternalWriteSearchSettingsToXml = function (writer, groupBy) {
        _super.prototype.InternalWriteSearchSettingsToXml.call(this, writer, groupBy);
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ConversationIndexedItemView.prototype.WriteAttributesToXml = function (writer) {
        if (this.Traversal) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Traversal, ConversationQueryTraversal_1.ConversationQueryTraversal[this.Traversal]);
        }
        if (this.ViewFilter) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.ViewFilter, ViewFilter_1.ViewFilter[this.ViewFilter]);
        }
    };
    /**
     * @internal Writes OrderBy property to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ConversationIndexedItemView.prototype.WriteOrderByToXml = function (writer) {
        this.orderBy.WriteToXml(writer, XmlElementNames_1.XmlElementNames.SortOrder);
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    ConversationIndexedItemView.prototype.WriteToXml = function (writer, groupBy) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, this.GetViewXmlElementName());
        this.InternalWriteViewToXml(writer);
        writer.WriteEndElement(); // this.GetViewXmlElementName()
    };
    return ConversationIndexedItemView;
}(PagedView_1.PagedView));
exports.ConversationIndexedItemView = ConversationIndexedItemView;
