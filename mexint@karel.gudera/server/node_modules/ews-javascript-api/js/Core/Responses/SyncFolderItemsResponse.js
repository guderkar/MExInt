"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../XmlElementNames");
var ItemChange_1 = require("../../Sync/ItemChange");
var SyncResponse_1 = require("./SyncResponse");
/**
 * Represents the response to a folder items synchronization operation.
 *
 * @sealed
 */
var SyncFolderItemsResponse = (function (_super) {
    __extends(SyncFolderItemsResponse, _super);
    /**
     * @internal Initializes a new instance of the **SyncFolderItemsResponse** class.
     *
     * @param   {PropertySet}   propertySet   PropertySet from request.
     */
    function SyncFolderItemsResponse(propertySet) {
        _super.call(this, propertySet);
    }
    Object.defineProperty(SyncFolderItemsResponse.prototype, "SummaryPropertiesOnly", {
        /**
         * @internal Gets a value indicating whether this request returns full or summary properties.
         *
         * @value	*true* if summary properties only; otherwise, *false*.
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates an item change instance.
     *
     * @return  {ItemChange}      ItemChange instance
     */
    SyncFolderItemsResponse.prototype.CreateChangeInstance = function () {
        return new ItemChange_1.ItemChange();
    };
    /**
     * @internal Gets the name of the change element.
     *
     * @return  {string}      Change element name.
     */
    SyncFolderItemsResponse.prototype.GetChangeElementName = function () {
        return XmlElementNames_1.XmlElementNames.Item;
    };
    /**
     * @internal Gets the name of the change id element.
     *
     * @return  {string}      Change id element name.
     */
    SyncFolderItemsResponse.prototype.GetChangeIdElementName = function () {
        return XmlElementNames_1.XmlElementNames.ItemId;
    };
    /**
     * @internal Gets the name of the includes last in range XML element.
     *
     * @return  {string}      XML element name.
     */
    SyncFolderItemsResponse.prototype.GetIncludesLastInRangeXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.IncludesLastItemInRange;
    };
    return SyncFolderItemsResponse;
}(SyncResponse_1.SyncResponse));
exports.SyncFolderItemsResponse = SyncFolderItemsResponse;
