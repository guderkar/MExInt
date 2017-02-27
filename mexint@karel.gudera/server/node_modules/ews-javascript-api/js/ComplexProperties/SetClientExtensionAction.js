"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComplexProperty_1 = require("./ComplexProperty");
var SetClientExtensionAction = (function (_super) {
    __extends(SetClientExtensionAction, _super);
    function SetClientExtensionAction() {
        _super.apply(this, arguments);
    }
    SetClientExtensionAction.prototype.WriteAttributesToXml = function (writer) { throw new Error("SetClientExtensionAction.ts - WriteAttributesToXml : Not implemented."); };
    SetClientExtensionAction.prototype.WriteElementsToXml = function (writer) { throw new Error("SetClientExtensionAction.ts - WriteElementsToXml : Not implemented."); };
    return SetClientExtensionAction;
}(ComplexProperty_1.ComplexProperty));
exports.SetClientExtensionAction = SetClientExtensionAction;
//}
