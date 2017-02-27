"use strict";
(function (MailboxSearchScopeType) {
    MailboxSearchScopeType[MailboxSearchScopeType["LegacyExchangeDN"] = 0] = "LegacyExchangeDN";
    MailboxSearchScopeType[MailboxSearchScopeType["PublicFolder"] = 1] = "PublicFolder";
    MailboxSearchScopeType[MailboxSearchScopeType["Recipient"] = 2] = "Recipient";
    MailboxSearchScopeType[MailboxSearchScopeType["MailboxGuid"] = 3] = "MailboxGuid";
    MailboxSearchScopeType[MailboxSearchScopeType["AllPublicFolders"] = 4] = "AllPublicFolders";
    MailboxSearchScopeType[MailboxSearchScopeType["AllMailboxes"] = 5] = "AllMailboxes";
    MailboxSearchScopeType[MailboxSearchScopeType["SavedSearchId"] = 6] = "SavedSearchId";
    MailboxSearchScopeType[MailboxSearchScopeType["AutoDetect"] = 7] = "AutoDetect";
})(exports.MailboxSearchScopeType || (exports.MailboxSearchScopeType = {}));
var MailboxSearchScopeType = exports.MailboxSearchScopeType;
