"use strict";
var EmailAddress_1 = require("../ComplexProperties/EmailAddress");
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var ExpandGroupResults = (function () {
    function ExpandGroupResults() {
        this.includesAllMembers = false;
        this.members = [];
    }
    Object.defineProperty(ExpandGroupResults.prototype, "Count", {
        get: function () {
            return this.members.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpandGroupResults.prototype, "IncludesAllMembers", {
        get: function () {
            return this.includesAllMembers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpandGroupResults.prototype, "Members", {
        get: function () {
            return this.members;
        },
        enumerable: true,
        configurable: true
    });
    //GetEnumerator(): EmailAddress[] /*System.Collections.Generic.IEnumerator<EmailAddress>*/ { throw new Error("ExpandGroupResults.ts - GetEnumerator : Not implemented."); }
    ExpandGroupResults.prototype.LoadFromXmlJsObject = function (responseObject, service) {
        var dlResponse = responseObject[XmlElementNames_1.XmlElementNames.DLExpansion];
        var mailboxes = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(dlResponse, XmlElementNames_1.XmlElementNames.Mailbox);
        this.includesAllMembers = ExtensionMethods_1.Convert.toBool(dlResponse[XmlAttributeNames_1.XmlAttributeNames.IncludesLastItemInRange]);
        var mailboxCount = ExtensionMethods_1.Convert.toNumber(dlResponse[XmlAttributeNames_1.XmlAttributeNames.TotalItemsInView]);
        for (var _i = 0, mailboxes_1 = mailboxes; _i < mailboxes_1.length; _i++) {
            var mailbox = mailboxes_1[_i];
            var emailAddress = new EmailAddress_1.EmailAddress();
            emailAddress.LoadFromXmlJsObject(mailbox, service);
            this.members.push(emailAddress);
        }
    };
    return ExpandGroupResults;
}());
exports.ExpandGroupResults = ExpandGroupResults;
