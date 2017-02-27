"use strict";
(function (PropertyDefinitionFlags) {
    PropertyDefinitionFlags[PropertyDefinitionFlags["None"] = 0] = "None";
    PropertyDefinitionFlags[PropertyDefinitionFlags["AutoInstantiateOnRead"] = 1] = "AutoInstantiateOnRead";
    PropertyDefinitionFlags[PropertyDefinitionFlags["ReuseInstance"] = 2] = "ReuseInstance";
    PropertyDefinitionFlags[PropertyDefinitionFlags["CanSet"] = 4] = "CanSet";
    PropertyDefinitionFlags[PropertyDefinitionFlags["CanUpdate"] = 8] = "CanUpdate";
    PropertyDefinitionFlags[PropertyDefinitionFlags["CanDelete"] = 16] = "CanDelete";
    PropertyDefinitionFlags[PropertyDefinitionFlags["CanFind"] = 32] = "CanFind";
    PropertyDefinitionFlags[PropertyDefinitionFlags["MustBeExplicitlyLoaded"] = 64] = "MustBeExplicitlyLoaded";
    PropertyDefinitionFlags[PropertyDefinitionFlags["UpdateCollectionItems"] = 128] = "UpdateCollectionItems";
})(exports.PropertyDefinitionFlags || (exports.PropertyDefinitionFlags = {}));
var PropertyDefinitionFlags = exports.PropertyDefinitionFlags;
