"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GenericPropertyDefinition_1 = require("./GenericPropertyDefinition");
/** @internal */
var ListValuePropertyDefinition = (function (_super) {
    __extends(ListValuePropertyDefinition, _super);
    function ListValuePropertyDefinition() {
        _super.apply(this, arguments);
    }
    ListValuePropertyDefinition.prototype.Parse = function (value) {
        throw new Error("ListValuePropertyDefinition - Parse: Not implemented.");
        // xs:list values are sent as a space-separated list; convert to comma-separated for EwsUtilities.Parse.
        var commaSeparatedValue = value ? value : value.replace(' ', ',');
        //return EwsUtilities.Parse<TPropertyValue>(commaSeparatedValue);
    };
    return ListValuePropertyDefinition;
}(GenericPropertyDefinition_1.GenericPropertyDefinition));
exports.ListValuePropertyDefinition = ListValuePropertyDefinition;
