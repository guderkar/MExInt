"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsLogging_1 = require("../Core/EwsLogging");
var AbstractItemIdWrapper_1 = require("./AbstractItemIdWrapper");
var ItemIdWrapper = (function (_super) {
    __extends(ItemIdWrapper, _super);
    function ItemIdWrapper(itemId) {
        _super.call(this);
        EwsLogging_1.EwsLogging.Assert(itemId != null, "ItemIdWrapper.ctor", "itemId is null");
        this.itemId = itemId;
    }
    ItemIdWrapper.prototype.IternalToJson = function (service) { throw new Error("ItemIdWrapper.ts - IternalToJson : Not implemented."); };
    ItemIdWrapper.prototype.WriteToXml = function (writer) { this.itemId.WriteToXml(writer); };
    return ItemIdWrapper;
}(AbstractItemIdWrapper_1.AbstractItemIdWrapper));
exports.ItemIdWrapper = ItemIdWrapper;
