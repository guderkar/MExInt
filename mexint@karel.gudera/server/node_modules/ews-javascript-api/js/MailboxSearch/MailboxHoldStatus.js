"use strict";
var HoldStatus_1 = require("../Enumerations/HoldStatus");
/**
 * Represents mailbox hold status
 *
 * @sealed
 */
var MailboxHoldStatus = (function () {
    function MailboxHoldStatus(mailbox, status, additionalInfo) {
        if (mailbox === void 0) { mailbox = null; }
        if (status === void 0) { status = HoldStatus_1.HoldStatus.NotOnHold; }
        if (additionalInfo === void 0) { additionalInfo = null; }
        this.Mailbox = mailbox;
        this.Status = status;
        this.AdditionalInfo = additionalInfo;
    }
    return MailboxHoldStatus;
}());
exports.MailboxHoldStatus = MailboxHoldStatus;
