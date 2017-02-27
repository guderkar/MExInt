"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var VotingInformation = (function (_super) {
    __extends(VotingInformation, _super);
    function VotingInformation() {
        _super.apply(this, arguments);
    }
    VotingInformation.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("VotingInformation.ts - LoadFromJson : Not implemented."); };
    VotingInformation.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("VotingInformation.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    return VotingInformation;
}(ComplexProperty_1.ComplexProperty));
exports.VotingInformation = VotingInformation;
//}
