"use strict";
var ConfigurationSettingsBase = (function () {
    function ConfigurationSettingsBase() {
    }
    ConfigurationSettingsBase.prototype.ConvertSettings = function (smtpAddress, requestedSettings) { throw new Error("ConfigurationSettingsBase.ts - ConvertSettings : Not implemented."); };
    ConfigurationSettingsBase.prototype.GetNamespace = function () { throw new Error("ConfigurationSettingsBase.ts - GetNamespace : Not implemented."); };
    ConfigurationSettingsBase.prototype.LoadFromXml = function (reader) { throw new Error("ConfigurationSettingsBase.ts - LoadFromXml : Not implemented."); };
    ConfigurationSettingsBase.prototype.MakeRedirectionResponse = function (redirectUrl) { throw new Error("ConfigurationSettingsBase.ts - MakeRedirectionResponse : Not implemented."); };
    ConfigurationSettingsBase.prototype.TryReadCurrentXmlElement = function (reader) { throw new Error("ConfigurationSettingsBase.ts - TryReadCurrentXmlElement : Not implemented."); };
    return ConfigurationSettingsBase;
}());
exports.ConfigurationSettingsBase = ConfigurationSettingsBase;
