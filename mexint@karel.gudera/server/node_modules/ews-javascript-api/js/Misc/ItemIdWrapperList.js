"use strict";
var ItemId_1 = require("../ComplexProperties/ItemId");
var Item_1 = require("../Core/ServiceObjects/Items/Item");
var ItemIdWrapper_1 = require("./ItemIdWrapper");
var ItemWrapper_1 = require("./ItemWrapper");
var ItemIdWrapperList = (function () {
    function ItemIdWrapperList() {
        //Item: Item;
        this.itemIds = []; //System.Collections.Generic.List<ItemId>;
    }
    Object.defineProperty(ItemIdWrapperList.prototype, "Count", {
        get: function () { return this.itemIds.length; },
        enumerable: true,
        configurable: true
    });
    ItemIdWrapperList.prototype.Add = function (itemOrId) {
        if (itemOrId instanceof Item_1.Item)
            this.itemIds.push(new ItemWrapper_1.ItemWrapper(itemOrId));
        else if (itemOrId instanceof ItemId_1.ItemId)
            this.itemIds.push(new ItemIdWrapper_1.ItemIdWrapper(itemOrId));
        else
            throw new Error("FolderIdWrapperList.ts - Add - should not be seeing this.");
    };
    ItemIdWrapperList.prototype.AddRange = function (itemsOrIds) {
        if (itemsOrIds != null) {
            for (var _i = 0, itemsOrIds_1 = itemsOrIds; _i < itemsOrIds_1.length; _i++) {
                var itemOrId = itemsOrIds_1[_i];
                this.Add(itemOrId);
            }
        }
    };
    ItemIdWrapperList.prototype.GetEnumerator = function () { throw new Error("ItemIdWrapperList.ts - GetEnumerator : Not implemented."); };
    ItemIdWrapperList.prototype.InternalToJson = function (service) { throw new Error("ItemIdWrapperList.ts - InternalToJson : Not implemented."); };
    ItemIdWrapperList.prototype.WriteToXml = function (writer, ewsNamesapce, xmlElementName) {
        if (this.Count > 0) {
            writer.WriteStartElement(ewsNamesapce, xmlElementName);
            for (var _i = 0, _a = this.itemIds; _i < _a.length; _i++) {
                var itemIdWrapper = _a[_i];
                itemIdWrapper.WriteToXml(writer);
            }
            writer.WriteEndElement();
        }
    };
    ItemIdWrapperList.prototype.__thisIndexer = function (index) {
        return this.itemIds[index].GetItem();
    };
    return ItemIdWrapperList;
}());
exports.ItemIdWrapperList = ItemIdWrapperList;
