"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GetFolderResponse_1 = require("../Responses/GetFolderResponse");
var GetFolderRequestBase_1 = require("./GetFolderRequestBase");
/** @internal */
var GetFolderRequestForLoad = (function (_super) {
    __extends(GetFolderRequestForLoad, _super);
    function GetFolderRequestForLoad(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
    }
    GetFolderRequestForLoad.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new GetFolderResponse_1.GetFolderResponse(this.FolderIds.__thisIndexer(responseIndex).GetFolder(), this.PropertySet);
    };
    return GetFolderRequestForLoad;
}(GetFolderRequestBase_1.GetFolderRequestBase));
exports.GetFolderRequestForLoad = GetFolderRequestForLoad;
