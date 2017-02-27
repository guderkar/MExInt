"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents response to GetUserOofSettings request.
 */
var GetUserOofSettingsResponse = (function (_super) {
    __extends(GetUserOofSettingsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetUserOofSettingsResponse** class.
     */
    function GetUserOofSettingsResponse() {
        _super.call(this);
        this.oofSettings = null;
    }
    Object.defineProperty(GetUserOofSettingsResponse.prototype, "OofSettings", {
        /**
         * Gets or sets the OOF settings.
         *
         * @value The oof settings.
         */
        get: function () {
            return this.oofSettings;
        },
        set: function (value) {
            this.oofSettings = value;
        },
        enumerable: true,
        configurable: true
    });
    return GetUserOofSettingsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetUserOofSettingsResponse = GetUserOofSettingsResponse;
