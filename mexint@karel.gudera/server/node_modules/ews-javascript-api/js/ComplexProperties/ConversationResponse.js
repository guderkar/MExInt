"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ConversationId_1 = require("./ConversationId");
var ConversationNodeCollection_1 = require("./ConversationNodeCollection");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 *
 *
 * @sealed
 */
var ConversationResponse = (function (_super) {
    __extends(ConversationResponse, _super);
    /**
     * @internal Initializes a new instance of the **ConversationResponse** class.
     *
     * @param   {PropertySet}   propertySet   The property set.
     */
    function ConversationResponse(propertySet) {
        _super.call(this);
        /**
         * Property set used to fetch items in the conversation.
         */
        this.propertySet = null;
        /**
         * Gets the conversation id.
         *
         * internal set
         */
        this.ConversationId = null;
        /**
         * Gets the sync state.
         *
         * internal set
         */
        this.SyncState = null;
        /**
         * Gets the conversation nodes.
         *
         * internal set
         */
        this.ConversationNodes = null;
        this.propertySet = propertySet;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    ConversationResponse.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        this.ConversationId = new ConversationId_1.ConversationId();
        this.ConversationId.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.ConversationId], service);
        if (jsObject[XmlElementNames_1.XmlElementNames.SyncState]) {
            this.SyncState = jsObject[XmlElementNames_1.XmlElementNames.SyncState];
        }
        this.ConversationNodes = new ConversationNodeCollection_1.ConversationNodeCollection(this.propertySet);
        if (jsObject[XmlElementNames_1.XmlElementNames.ConversationNodes]) {
            this.ConversationNodes.LoadFromXmlJsObject(EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.ConversationNodes], XmlElementNames_1.XmlElementNames.ConversationNode), service);
        }
    };
    return ConversationResponse;
}(ComplexProperty_1.ComplexProperty));
exports.ConversationResponse = ConversationResponse;
