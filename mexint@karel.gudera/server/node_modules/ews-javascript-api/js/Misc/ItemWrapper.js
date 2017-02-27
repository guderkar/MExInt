"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractItemIdWrapper_1 = require("./AbstractItemIdWrapper");
var EwsLogging_1 = require("../Core/EwsLogging");
var ItemWrapper = (function (_super) {
    __extends(ItemWrapper, _super);
    function ItemWrapper(item) {
        _super.call(this);
        EwsLogging_1.EwsLogging.Assert(item != null, "ItemWrapper.ctor", "item is null");
        EwsLogging_1.EwsLogging.Assert(!item.IsNew, "ItemWrapper.ctor", "item does not have an Id");
        this.item = item;
    }
    ItemWrapper.prototype.GetItem = function () { return this.item; };
    ItemWrapper.prototype.IternalToJson = function (service) { throw new Error("ItemWrapper.ts - IternalToJson : Not implemented."); };
    ItemWrapper.prototype.WriteToXml = function (writer) { this.item.Id.WriteToXml(writer); };
    return ItemWrapper;
}(AbstractItemIdWrapper_1.AbstractItemIdWrapper));
exports.ItemWrapper = ItemWrapper;
