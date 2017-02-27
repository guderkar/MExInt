"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GetFolderResponse_1 = require("../Responses/GetFolderResponse");
var GetFolderRequestBase_1 = require("./GetFolderRequestBase");
/** @internal */
var GetFolderRequest = (function (_super) {
    __extends(GetFolderRequest, _super);
    function GetFolderRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
    }
    GetFolderRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new GetFolderResponse_1.GetFolderResponse(this.FolderIds.__thisIndexer(responseIndex).GetFolder(), this.PropertySet);
    };
    return GetFolderRequest;
}(GetFolderRequestBase_1.GetFolderRequestBase));
exports.GetFolderRequest = GetFolderRequest;
