"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemInfo_1 = require("../ServiceObjects/Items/ItemInfo");
var CreateItemResponseBase_1 = require("./CreateItemResponseBase");
var CreateResponseObjectResponse = (function (_super) {
    __extends(CreateResponseObjectResponse, _super);
    function CreateResponseObjectResponse() {
        _super.apply(this, arguments);
    }
    CreateResponseObjectResponse.prototype.GetObjectInstance = function (service, xmlElementName) {
        var itemInfo = new ItemInfo_1.ItemInfo();
        return itemInfo.CreateEwsObjectFromXmlElementName(service, xmlElementName);
        //return EwsUtilities.CreateEwsObjectFromXmlElementName<Item>(service, xmlElementName);
    };
    return CreateResponseObjectResponse;
}(CreateItemResponseBase_1.CreateItemResponseBase));
exports.CreateResponseObjectResponse = CreateResponseObjectResponse;
