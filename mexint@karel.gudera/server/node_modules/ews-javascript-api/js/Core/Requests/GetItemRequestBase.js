"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Schemas_1 = require("../ServiceObjects/Schemas/Schemas");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ItemIdWrapperList_1 = require("../../Misc/ItemIdWrapperList");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ServiceObjectType_1 = require("../../Enumerations/ServiceObjectType");
var GetRequest_1 = require("./GetRequest");
/** @internal */
var GetItemRequestBase = (function (_super) {
    __extends(GetItemRequestBase, _super);
    function GetItemRequestBase(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
        this.itemIds = new ItemIdWrapperList_1.ItemIdWrapperList();
    }
    Object.defineProperty(GetItemRequestBase.prototype, "ItemIds", {
        get: function () {
            return this.itemIds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetItemRequestBase.prototype, "EmitTimeZoneHeader", {
        get: function () {
            // currently we do not emit "ItemResponseShapeType.IncludeMimeContent".
            //
            return this.PropertySet.Contains(Schemas_1.Schemas.ItemSchema.MimeContent);
        },
        enumerable: true,
        configurable: true
    });
    //AddIdsToRequest(jsonRequest: any, service: ExchangeService): any { throw new Error("GetItemRequestBase.ts - AddIdsToRequest : Not implemented."); }
    GetItemRequestBase.prototype.GetExpectedResponseMessageCount = function () { return this.ItemIds.Count; };
    GetItemRequestBase.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    GetItemRequestBase.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetItemResponseMessage; };
    GetItemRequestBase.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetItemResponse; };
    GetItemRequestBase.prototype.GetServiceObjectType = function () { return ServiceObjectType_1.ServiceObjectType.Item; };
    GetItemRequestBase.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetItem; };
    GetItemRequestBase.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParamCollection(this.ItemIds, "ItemIds");
    };
    GetItemRequestBase.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        this.ItemIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ItemIds);
    };
    return GetItemRequestBase;
}(GetRequest_1.GetRequest));
exports.GetItemRequestBase = GetItemRequestBase;
