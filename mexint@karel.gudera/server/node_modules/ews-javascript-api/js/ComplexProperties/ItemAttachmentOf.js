"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemAttachment_1 = require("./ItemAttachment");
/**
 * Represents a strongly typed item attachment. **Workaround of ItemAttachment<TItem>** - not allowed in typescript to have two class, one generic and one non-generic
 */
var ItemAttachmentOf = (function (_super) {
    __extends(ItemAttachmentOf, _super);
    /**
     * @internal Initializes a new instance of the  class.
     *
     * @param   {Item}   owner   The owner of the attachment.
     */
    function ItemAttachmentOf(owner) {
        _super.call(this, owner);
    }
    Object.defineProperty(ItemAttachmentOf.prototype, "Item", {
        /**
         * Gets the item associated with the attachment.
         */
        get: function () { return this.item; },
        set: function (value) { _super.prototype._setItem.call(this, value); },
        enumerable: true,
        configurable: true
    });
    return ItemAttachmentOf;
}(ItemAttachment_1.ItemAttachment));
exports.ItemAttachmentOf = ItemAttachmentOf;
