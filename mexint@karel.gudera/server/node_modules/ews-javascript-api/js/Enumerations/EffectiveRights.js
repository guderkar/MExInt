"use strict";
(function (EffectiveRights) {
    EffectiveRights[EffectiveRights["None"] = 0] = "None";
    EffectiveRights[EffectiveRights["CreateAssociated"] = 1] = "CreateAssociated";
    EffectiveRights[EffectiveRights["CreateContents"] = 2] = "CreateContents";
    EffectiveRights[EffectiveRights["CreateHierarchy"] = 4] = "CreateHierarchy";
    EffectiveRights[EffectiveRights["Delete"] = 8] = "Delete";
    EffectiveRights[EffectiveRights["Modify"] = 16] = "Modify";
    EffectiveRights[EffectiveRights["Read"] = 32] = "Read";
    EffectiveRights[EffectiveRights["ViewPrivateItems"] = 64] = "ViewPrivateItems";
})(exports.EffectiveRights || (exports.EffectiveRights = {}));
var EffectiveRights = exports.EffectiveRights;
