"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EwsUtilities_1 = require("../Core/EwsUtilities");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 *
 *
 * @sealed
 */
var ConversationRequest = (function (_super) {
    __extends(ConversationRequest, _super);
    function ConversationRequest(conversationId, syncState) {
        if (conversationId === void 0) { conversationId = null; }
        if (syncState === void 0) { syncState = null; }
        _super.call(this);
        /** @internal */
        this.___implementsInterface = ["ISelfValidate", "IJsonSerializable"];
        this.ConversationId = conversationId;
        this.SyncState = syncState;
    }
    /**
     * @internal Validates this instance.
     */
    ConversationRequest.prototype.InternalValidate = function () {
        EwsUtilities_1.EwsUtilities.ValidateParam(this.ConversationId, "ConversationId");
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    ConversationRequest.prototype.WriteToXml = function (writer, xmlElementName) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, xmlElementName);
        this.ConversationId.WriteToXml(writer);
        if (this.SyncState != null) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SyncState, this.SyncState);
        }
        writer.WriteEndElement();
    };
    return ConversationRequest;
}(ComplexProperty_1.ComplexProperty));
exports.ConversationRequest = ConversationRequest;
