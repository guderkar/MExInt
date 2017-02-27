"use strict";
(function (ConversationActionType) {
    ConversationActionType[ConversationActionType["AlwaysCategorize"] = 0] = "AlwaysCategorize";
    ConversationActionType[ConversationActionType["AlwaysDelete"] = 1] = "AlwaysDelete";
    ConversationActionType[ConversationActionType["AlwaysMove"] = 2] = "AlwaysMove";
    ConversationActionType[ConversationActionType["Delete"] = 3] = "Delete";
    ConversationActionType[ConversationActionType["Move"] = 4] = "Move";
    ConversationActionType[ConversationActionType["Copy"] = 5] = "Copy";
    ConversationActionType[ConversationActionType["SetReadState"] = 6] = "SetReadState";
    ConversationActionType[ConversationActionType["SetRetentionPolicy"] = 7] = "SetRetentionPolicy";
    ConversationActionType[ConversationActionType["Flag"] = 8] = "Flag";
})(exports.ConversationActionType || (exports.ConversationActionType = {}));
var ConversationActionType = exports.ConversationActionType;
