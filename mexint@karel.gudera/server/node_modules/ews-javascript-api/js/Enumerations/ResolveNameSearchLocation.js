"use strict";
(function (ResolveNameSearchLocation) {
    ResolveNameSearchLocation[ResolveNameSearchLocation["DirectoryOnly"] = 0] = "DirectoryOnly";
    ResolveNameSearchLocation[ResolveNameSearchLocation["DirectoryThenContacts"] = 1] = "DirectoryThenContacts";
    ResolveNameSearchLocation[ResolveNameSearchLocation["ContactsOnly"] = 2] = "ContactsOnly";
    ResolveNameSearchLocation[ResolveNameSearchLocation["ContactsThenDirectory"] = 3] = "ContactsThenDirectory";
})(exports.ResolveNameSearchLocation || (exports.ResolveNameSearchLocation = {}));
var ResolveNameSearchLocation = exports.ResolveNameSearchLocation;
