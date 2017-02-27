"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var VotingOptionData = (function (_super) {
    __extends(VotingOptionData, _super);
    function VotingOptionData() {
        _super.apply(this, arguments);
    }
    VotingOptionData.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("VotingOptionData.ts - LoadFromJson : Not implemented."); };
    VotingOptionData.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("VotingOptionData.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    return VotingOptionData;
}(ComplexProperty_1.ComplexProperty));
exports.VotingOptionData = VotingOptionData;
//}
