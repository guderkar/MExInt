"use strict";
/**
 * Defines the type of an EmailAddress object.
 */
(function (MailboxType) {
    /**
     * Unknown mailbox type (Exchange 2010 or later).
     */
    MailboxType[MailboxType["Unknown"] = 0] = "Unknown";
    /**
     * The EmailAddress represents a one-off contact (Exchange 2010 or later).
     */
    MailboxType[MailboxType["OneOff"] = 1] = "OneOff";
    /**
     * The EmailAddress represents a mailbox.
     */
    MailboxType[MailboxType["Mailbox"] = 2] = "Mailbox";
    /**
     * The EmailAddress represents a public folder.
     */
    MailboxType[MailboxType["PublicFolder"] = 3] = "PublicFolder";
    /**
     * The EmailAddress represents a Public Group.
     */
    MailboxType[MailboxType["PublicGroup"] = 4] = "PublicGroup";
    /**
     * The EmailAddress represents a Contact Group.
     */
    MailboxType[MailboxType["ContactGroup"] = 5] = "ContactGroup";
    /**
     * The EmailAddress represents a store contact or AD mail contact.
     */
    MailboxType[MailboxType["Contact"] = 6] = "Contact";
    /**
     * The EmailAddress represents a GroupMailbox
     */
    MailboxType[MailboxType["GroupMailbox"] = 7] = "GroupMailbox";
})(exports.MailboxType || (exports.MailboxType = {}));
var MailboxType = exports.MailboxType;
/**
 * This is to workaround **EwsEnumAttribute**
 */
var MailboxTypeParser = (function () {
    function MailboxTypeParser() {
    }
    MailboxTypeParser.ToString = function (value) {
        switch (value) {
            case MailboxType.PublicGroup:
                return "PublicDL";
            case MailboxType.ContactGroup:
                return "PrivateDL";
            default:
                return MailboxType[value];
        }
    };
    MailboxTypeParser.FromString = function (value) {
        switch (value) {
            case "PublicDL":
                return MailboxType.PublicGroup;
            case "PrivateDL":
                return MailboxType.ContactGroup;
            default:
                return MailboxType[value];
        }
    };
    return MailboxTypeParser;
}());
exports.MailboxTypeParser = MailboxTypeParser;
