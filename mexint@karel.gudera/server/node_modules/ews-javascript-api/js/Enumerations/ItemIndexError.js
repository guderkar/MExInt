//todo - move to file where class Microsoft.Exchange.WebServices.Data.NonIndexableItem is located
"use strict";
(function (ItemIndexError) {
    ItemIndexError[ItemIndexError["None"] = 0] = "None";
    ItemIndexError[ItemIndexError["GenericError"] = 1] = "GenericError";
    ItemIndexError[ItemIndexError["Timeout"] = 2] = "Timeout";
    ItemIndexError[ItemIndexError["StaleEvent"] = 3] = "StaleEvent";
    ItemIndexError[ItemIndexError["MailboxOffline"] = 4] = "MailboxOffline";
    ItemIndexError[ItemIndexError["AttachmentLimitReached"] = 5] = "AttachmentLimitReached";
    ItemIndexError[ItemIndexError["MarsWriterTruncation"] = 6] = "MarsWriterTruncation";
})(exports.ItemIndexError || (exports.ItemIndexError = {}));
var ItemIndexError = exports.ItemIndexError;
