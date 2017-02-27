"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ServiceId_1 = require("./ServiceId");
/**
 * Represents the Id of a Conversation.
 */
var ConversationId = (function (_super) {
    __extends(ConversationId, _super);
    function ConversationId(uniqueId) {
        arguments.length === 0 ? _super.call(this) : _super.call(this, uniqueId);
    }
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    ConversationId.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ConversationId; };
    /**
     * Gets a string representation of the Conversation Id.
     *
     * @return  {string}      The string representation of the conversation id.
     */
    ConversationId.prototype.ToString = function () {
        // We have ignored the change key portion
        return this.UniqueId;
    };
    ConversationId.prototype.toString = function () { return this.ToString(); };
    return ConversationId;
}(ServiceId_1.ServiceId));
exports.ConversationId = ConversationId;
