"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ServiceId_1 = require("./ServiceId");
var ItemId = (function (_super) {
    __extends(ItemId, _super);
    function ItemId(uniqueId) {
        if (arguments.length === 0) {
            _super.call(this);
            return;
        }
        _super.call(this, uniqueId);
    }
    ItemId.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ItemId; };
    return ItemId;
}(ServiceId_1.ServiceId));
exports.ItemId = ItemId;
