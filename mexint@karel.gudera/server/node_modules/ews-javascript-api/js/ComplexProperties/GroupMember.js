"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var GroupMember = (function (_super) {
    __extends(GroupMember, _super);
    function GroupMember() {
        _super.apply(this, arguments);
    }
    GroupMember.prototype.AddressInformationChanged = function (complexProperty) { throw new Error("GroupMember.ts - AddressInformationChanged : Not implemented."); };
    GroupMember.prototype.InternalToJson = function (service) { throw new Error("GroupMember.ts - InternalToJson : Not implemented."); };
    GroupMember.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("GroupMember.ts - LoadFromJson : Not implemented."); };
    GroupMember.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("GroupMember.ts - ReadAttributesFromXml : Not implemented."); };
    GroupMember.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GroupMember.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    GroupMember.prototype.WriteAttributesToXml = function (writer) { throw new Error("GroupMember.ts - WriteAttributesToXml : Not implemented."); };
    GroupMember.prototype.WriteElementsToXml = function (writer) { throw new Error("GroupMember.ts - WriteElementsToXml : Not implemented."); };
    return GroupMember;
}(ComplexProperty_1.ComplexProperty));
exports.GroupMember = GroupMember;
//}
