"use strict";
(function (ViewFilter) {
    ViewFilter[ViewFilter["All"] = 0] = "All";
    ViewFilter[ViewFilter["Flagged"] = 1] = "Flagged";
    ViewFilter[ViewFilter["HasAttachment"] = 2] = "HasAttachment";
    ViewFilter[ViewFilter["ToOrCcMe"] = 3] = "ToOrCcMe";
    ViewFilter[ViewFilter["Unread"] = 4] = "Unread";
    ViewFilter[ViewFilter["TaskActive"] = 5] = "TaskActive";
    ViewFilter[ViewFilter["TaskOverdue"] = 6] = "TaskOverdue";
    ViewFilter[ViewFilter["TaskCompleted"] = 7] = "TaskCompleted";
    ViewFilter[ViewFilter["Suggestions"] = 8] = "Suggestions";
    ViewFilter[ViewFilter["SuggestionsRespond"] = 9] = "SuggestionsRespond";
    ViewFilter[ViewFilter["SuggestionsDelete"] = 10] = "SuggestionsDelete";
})(exports.ViewFilter || (exports.ViewFilter = {}));
var ViewFilter = exports.ViewFilter;
