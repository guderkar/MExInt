"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
var GroupMemberCollection = (function (_super) {
    __extends(GroupMemberCollection, _super);
    function GroupMemberCollection() {
        _super.apply(this, arguments);
    }
    GroupMemberCollection.prototype.Add = function (member) { throw new Error("GroupMemberCollection.ts - Add : Not implemented."); };
    GroupMemberCollection.prototype.AddContactEmailAddress = function (contact, emailAddressKey) { throw new Error("GroupMemberCollection.ts - AddContactEmailAddress : Not implemented."); };
    GroupMemberCollection.prototype.AddContactGroup = function (contactGroupId) { throw new Error("GroupMemberCollection.ts - AddContactGroup : Not implemented."); };
    GroupMemberCollection.prototype.AddDirectoryContact = function (address, routingType) { throw new Error("GroupMemberCollection.ts - AddDirectoryContact : Not implemented."); };
    //AddDirectoryContact(smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryContact : Not implemented."); }
    GroupMemberCollection.prototype.AddDirectoryPublicFolder = function (smtpAddress) { throw new Error("GroupMemberCollection.ts - AddDirectoryPublicFolder : Not implemented."); };
    GroupMemberCollection.prototype.AddDirectoryUser = function (address, routingType) { throw new Error("GroupMemberCollection.ts - AddDirectoryUser : Not implemented."); };
    //AddDirectoryUser(smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryUser : Not implemented."); }
    GroupMemberCollection.prototype.AddOneOff = function (displayName, address, routingType) { throw new Error("GroupMemberCollection.ts - AddOneOff : Not implemented."); };
    //AddOneOff(displayName: string, smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddOneOff : Not implemented."); }
    GroupMemberCollection.prototype.AddPersonalContact = function (contactId) { throw new Error("GroupMemberCollection.ts - AddPersonalContact : Not implemented."); };
    //AddPersonalContact(contactId: ItemId, addressToLink: string): any { throw new Error("GroupMemberCollection.ts - AddPersonalContact : Not implemented."); }
    GroupMemberCollection.prototype.AddPublicGroup = function (smtpAddress) { throw new Error("GroupMemberCollection.ts - AddPublicGroup : Not implemented."); };
    GroupMemberCollection.prototype.AddRange = function (members /*System.Collections.Generic.IEnumerable<T>*/) { throw new Error("GroupMemberCollection.ts - AddRange : Not implemented."); };
    GroupMemberCollection.prototype.Clear = function () { throw new Error("GroupMemberCollection.ts - Clear : Not implemented."); };
    GroupMemberCollection.prototype.ClearChangeLog = function () { throw new Error("GroupMemberCollection.ts - ClearChangeLog : Not implemented."); };
    GroupMemberCollection.prototype.CreateComplexProperty = function (xmlElementName) { throw new Error("GroupMemberCollection.ts - CreateComplexProperty : Not implemented."); };
    GroupMemberCollection.prototype.CreateDefaultComplexProperty = function () { throw new Error("GroupMemberCollection.ts - CreateDefaultComplexProperty : Not implemented."); };
    GroupMemberCollection.prototype.Find = function (key) { throw new Error("GroupMemberCollection.ts - Find : Not implemented."); };
    GroupMemberCollection.prototype.GetCollectionItemXmlElementName = function (member) { throw new Error("GroupMemberCollection.ts - GetCollectionItemXmlElementName : Not implemented."); };
    GroupMemberCollection.prototype.InternalValidate = function () { throw new Error("GroupMemberCollection.ts - InternalValidate : Not implemented."); };
    GroupMemberCollection.prototype.Remove = function (member) { throw new Error("GroupMemberCollection.ts - Remove : Not implemented."); };
    GroupMemberCollection.prototype.RemoveAt = function (index) { throw new Error("GroupMemberCollection.ts - RemoveAt : Not implemented."); };
    GroupMemberCollection.prototype.WriteDeleteMembersCollectionToXml = function (writer) { throw new Error("GroupMemberCollection.ts - WriteDeleteMembersCollectionToXml : Not implemented."); };
    GroupMemberCollection.prototype.WriteDeleteMembersToXml = function (writer, members /* System.Collections.Generic.List<GroupMember>*/) { throw new Error("GroupMemberCollection.ts - WriteDeleteMembersToXml : Not implemented."); };
    GroupMemberCollection.prototype.WriteSetOrAppendMembersToXml = function (writer, members /*System.Collections.Generic.List<GroupMember>*/, setMode) { throw new Error("GroupMemberCollection.ts - WriteSetOrAppendMembersToXml : Not implemented."); };
    return GroupMemberCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.GroupMemberCollection = GroupMemberCollection;
//}
