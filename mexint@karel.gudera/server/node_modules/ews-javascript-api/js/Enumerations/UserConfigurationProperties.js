"use strict";
/**
 * Identifies the user configuration properties to retrieve.
 *
 * @Flags
 */
(function (UserConfigurationProperties) {
    /**
     * Retrieve the Id property.
     */
    UserConfigurationProperties[UserConfigurationProperties["Id"] = 1] = "Id";
    /**
     * Retrieve the Dictionary property.
     */
    UserConfigurationProperties[UserConfigurationProperties["Dictionary"] = 2] = "Dictionary";
    /**
     * Retrieve the XmlData property.
     */
    UserConfigurationProperties[UserConfigurationProperties["XmlData"] = 4] = "XmlData";
    /**
     * Retrieve the BinaryData property.
     */
    UserConfigurationProperties[UserConfigurationProperties["BinaryData"] = 8] = "BinaryData";
    /**
     * Retrieve all properties.
     */
    UserConfigurationProperties[UserConfigurationProperties["All"] = 15] = "All";
})(exports.UserConfigurationProperties || (exports.UserConfigurationProperties = {}));
var UserConfigurationProperties = exports.UserConfigurationProperties;
