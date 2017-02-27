"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var MoveCopyRequest = (function (_super) {
    __extends(MoveCopyRequest, _super);
    function MoveCopyRequest(service, errorHandlingMode) {
        _super.call(this, service, errorHandlingMode);
        this.destinationFolderId = null;
    }
    Object.defineProperty(MoveCopyRequest.prototype, "DestinationFolderId", {
        get: function () {
            return this.destinationFolderId;
        },
        set: function (value) {
            this.destinationFolderId = value;
        },
        enumerable: true,
        configurable: true
    });
    MoveCopyRequest.prototype.AddIdsToJson = function (jsonObject, service) { throw new Error("MoveCopyRequest.ts - AddIdsToJson : Not implemented."); };
    MoveCopyRequest.prototype.Validate = function () {
        //EwsUtilities.ValidateParam(this.DestinationFolderId, "DestinationFolderId");
        this.DestinationFolderId.Validate(this.Service.RequestedServerVersion);
    };
    MoveCopyRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ToFolderId);
        this.DestinationFolderId.WriteToXml(writer);
        writer.WriteEndElement();
        this.WriteIdsToXml(writer);
    };
    MoveCopyRequest.prototype.WriteIdsToXml = function (writer) { throw new Error("MoveCopyRequest.ts - WriteIdsToXml : Abstract - must implement."); };
    return MoveCopyRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.MoveCopyRequest = MoveCopyRequest;
