"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var GetUserSettingsResponse_1 = require("./GetUserSettingsResponse");
var AutodiscoverResponseCollection_1 = require("../AutodiscoverResponseCollection");
var GetUserSettingsResponseCollection = (function (_super) {
    __extends(GetUserSettingsResponseCollection, _super);
    function GetUserSettingsResponseCollection() {
        _super.apply(this, arguments);
    }
    GetUserSettingsResponseCollection.prototype.CreateResponseInstance = function () { return new GetUserSettingsResponse_1.GetUserSettingsResponse(); };
    GetUserSettingsResponseCollection.prototype.GetResponseCollectionXmlElementName = function () { return XmlElementNames_1.XmlElementNames.UserResponses; };
    GetUserSettingsResponseCollection.prototype.GetResponseInstanceXmlElementName = function () { return XmlElementNames_1.XmlElementNames.UserResponse; };
    return GetUserSettingsResponseCollection;
}(AutodiscoverResponseCollection_1.AutodiscoverResponseCollection));
exports.GetUserSettingsResponseCollection = GetUserSettingsResponseCollection;
