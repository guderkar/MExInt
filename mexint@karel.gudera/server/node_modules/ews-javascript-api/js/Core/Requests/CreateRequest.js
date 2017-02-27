"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var CreateRequest = (function (_super) {
    __extends(CreateRequest, _super);
    function CreateRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
        this.parentFolderId = null;
        this.objects = []; // null;
    }
    Object.defineProperty(CreateRequest.prototype, "Objects", {
        get: function () {
            return this.objects;
        },
        set: function (value) {
            this.objects = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateRequest.prototype, "ParentFolderId", {
        get: function () {
            return this.parentFolderId;
        },
        set: function (value) {
            this.parentFolderId = value;
        },
        enumerable: true,
        configurable: true
    });
    CreateRequest.prototype.AddJsonProperties = function (jsonRequest, service) { throw new Error("CreateRequest.ts - AddJsonProperties : Not implemented."); };
    CreateRequest.prototype.GetExpectedResponseMessageCount = function () { return this.Objects.length; };
    CreateRequest.prototype.GetObjectCollectionXmlElementName = function () { throw new Error("CreateRequest.ts - GetObjectCollectionXmlElementName : abstract - must implement."); };
    CreateRequest.prototype.GetParentFolderXmlElementName = function () { throw new Error("CreateRequest.ts - GetParentFolderXmlElementName : abstract - must implement."); };
    CreateRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if (this.ParentFolderId != null) {
            this.ParentFolderId.Validate(this.Service.RequestedServerVersion);
        }
    };
    CreateRequest.prototype.WriteElementsToXml = function (writer) {
        if (this.ParentFolderId != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, this.GetParentFolderXmlElementName());
            this.ParentFolderId.WriteToXml(writer);
            writer.WriteEndElement();
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, this.GetObjectCollectionXmlElementName());
        for (var _i = 0, _a = this.objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.WriteToXml(writer);
        }
        writer.WriteEndElement();
    };
    return CreateRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.CreateRequest = CreateRequest;
