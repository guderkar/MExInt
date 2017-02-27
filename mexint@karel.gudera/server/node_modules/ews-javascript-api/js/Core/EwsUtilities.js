"use strict";
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var DateTime_1 = require("../DateTime");
var DayOfTheWeek_1 = require("../Enumerations/DayOfTheWeek");
var DictionaryKeyType_1 = require("../Enumerations/DictionaryKeyType");
var EmailAddressKey_1 = require("../Enumerations/EmailAddressKey");
var EnumToExchangeVersionMappingHelper_1 = require("../Enumerations/EnumToExchangeVersionMappingHelper");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var ImAddressKey_1 = require("../Enumerations/ImAddressKey");
var LazyMember_1 = require("./LazyMember");
var PhoneNumberKey_1 = require("../Enumerations/PhoneNumberKey");
var PhysicalAddressKey_1 = require("../Enumerations/PhysicalAddressKey");
var ServiceVersionException_1 = require("../Exceptions/ServiceVersionException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var DateTime_2 = require("../DateTime");
var TimeZoneConversionException_1 = require("../Exceptions/TimeZoneConversionException");
var TypeContainer_1 = require("../TypeContainer");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var EwsUtilities = (function () {
    function EwsUtilities() {
    }
    // private static schemaToEnumDictionaries: LazyMember<DictionaryWithNumericKey<DictionaryWithStringKey<number>>> = new LazyMember<DictionaryWithNumericKey<DictionaryWithStringKey<number>>>(
    //     () => {
    //         var dict = new DictionaryWithNumericKey<DictionaryWithStringKey<number>>();
    //         dict.addUpdate(EnumToSchemaMappingHelper.WellKnownFolderName, EwsUtilities.BuildSchemaToEnumDict(EnumToSchemaMappingHelper.WellKnownFolderName));
    //         dict.addUpdate(EnumToSchemaMappingHelper.ItemTraversal, EwsUtilities.BuildSchemaToEnumDict(EnumToSchemaMappingHelper.ItemTraversal));
    //         dict.addUpdate(EnumToSchemaMappingHelper.ConversationQueryTraversal, EwsUtilities.BuildSchemaToEnumDict(EnumToSchemaMappingHelper.ConversationQueryTraversal));
    //         dict.addUpdate(EnumToSchemaMappingHelper.FileAsMapping, EwsUtilities.BuildSchemaToEnumDict(EnumToSchemaMappingHelper.FileAsMapping));
    //         dict.addUpdate(EnumToSchemaMappingHelper.EventType, EwsUtilities.BuildSchemaToEnumDict(EnumToSchemaMappingHelper.EventType));
    //         dict.addUpdate(EnumToSchemaMappingHelper.MeetingRequestsDeliveryScope, EwsUtilities.BuildSchemaToEnumDict(EnumToSchemaMappingHelper.MeetingRequestsDeliveryScope));
    //         dict.addUpdate(EnumToSchemaMappingHelper.ViewFilter, EwsUtilities.BuildSchemaToEnumDict(EnumToSchemaMappingHelper.ViewFilter));
    //         dict.addUpdate(EnumToSchemaMappingHelper.MailboxType, EwsUtilities.BuildSchemaToEnumDict(EnumToSchemaMappingHelper.EventType));
    //         return dict;
    //     });
    // private static enumToSchemaDictionaries: LazyMember<DictionaryWithNumericKey<DictionaryWithNumericKey<string>>>;
    //private static typeNameToShortNameMap: LazyMember<T>;
    EwsUtilities.BoolToXSBool = function (value) {
        var boolvalue = ExtensionMethods_1.Convert.toBool(value);
        return boolvalue ? EwsUtilities.XSTrue : EwsUtilities.XSFalse;
        //throw new Error("EwsUtilities.ts - static BoolToXSBool : Not implemented.");
    };
    //static BuildEnumDict(enumType: System.Type): System.Collections.Generic.Dictionary<TKey, TValue>{ throw new Error("EwsUtilities.ts - static BuildEnumDict : Not implemented.");}
    //deviation - need to work with static data for enum to exchange version dict, there is no Attribute type system in javascript.
    EwsUtilities.BuildEnumDict = function (enumType) {
        var enumDelegate = function (value) { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
        switch (enumType) {
            //TODO: fix numbering to named enum value if possible
            case EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper.WellKnownFolderName:
                enumDelegate = function (value) {
                    var enumVersion = ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
                    if (value <= 15)
                        enumVersion = ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
                    else if (value >= 16 && value <= 26)
                        enumVersion = ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
                    else if (value >= 27 && value <= 34)
                        enumVersion = ExchangeVersion_1.ExchangeVersion.Exchange2013;
                    else
                        enumVersion = ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
                    return enumVersion;
                };
                break;
            case EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper.ItemTraversal:
                enumDelegate = function (value) {
                    if (value <= 1)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
                    else if (value == 2)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2010;
                    return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper.ConversationQueryTraversal:
                enumDelegate = function (value) {
                    if (value <= 1)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
                    return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper.FileAsMapping:
                enumDelegate = function (value) {
                    if (value <= 12)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
                    else if (value >= 13 && value <= 17)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2010;
                    return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper.EventType:
                enumDelegate = function (value) {
                    if (value <= 6)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
                    else if (value == 7)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
                    return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper.MeetingRequestsDeliveryScope:
                enumDelegate = function (value) {
                    if (value <= 2)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
                    else if (value == 3)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
                    return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper.ViewFilter:
                enumDelegate = function (value) {
                    if (value <= 10)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
                    return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper.MailboxType:
                enumDelegate = function (value) {
                    if (value <= 1)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2010;
                    if (value <= 6)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
                    if (value <= 7)
                        return ExchangeVersion_1.ExchangeVersion.Exchange2015;
                    return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            default:
                throw new Error("EwsUtilities.ts - BuildEnumDict - no mapping available for this enumtype" + EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper[enumType]);
        }
        return enumDelegate;
    };
    //deviation - need to work with static data for enum to exchange version dict, there is no Attribute type system in javascript.
    EwsUtilities.BuildEnumToSchemaDict = function (enumType) { throw new Error("EwsUtilities.ts - static BuildEnumToSchemaDict : Not implemented."); };
    //deviation - need to work with static data for enum to exchange version dict, there is no Attribute type system in javascript.
    EwsUtilities.BuildSchemaToEnumDict = function (enumType) { throw new Error("EwsUtilities.ts - static BuildSchemaToEnumDict : Not implemented."); };
    EwsUtilities.GetDictionaryKeyTypeEnum = function (dictionaryKeyType) {
        switch (dictionaryKeyType) {
            case DictionaryKeyType_1.DictionaryKeyType.EmailAddressKey:
                return EmailAddressKey_1.EmailAddressKey;
            case DictionaryKeyType_1.DictionaryKeyType.ImAddressKey:
                return ImAddressKey_1.ImAddressKey;
            case DictionaryKeyType_1.DictionaryKeyType.PhoneNumberKey:
                return PhoneNumberKey_1.PhoneNumberKey;
            case DictionaryKeyType_1.DictionaryKeyType.PhysicalAddressKey:
                return PhysicalAddressKey_1.PhysicalAddressKey;
            default:
                throw new Error("EwsUtilities.ts - GetDictionaryKeyTypeEnum - invalid value: " + dictionaryKeyType);
        }
    };
    EwsUtilities.GetExchangeVersionFromEnumDelegate = function (enumType, enumValue) {
        var delegate = this.enumVersionDictionaries.Member[EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper[enumType]];
        if (delegate && typeof delegate === 'function') {
            try {
                return delegate(enumValue);
            }
            catch (ex) { }
        }
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    EwsUtilities.ConvertTime = function (dateTime, sourceTimeZone, destinationTimeZone) {
        try {
            return DateTime_1.TimeZoneInfo.ConvertTime(dateTime, sourceTimeZone, destinationTimeZone);
        }
        catch (ex) {
            throw new TimeZoneConversionException_1.TimeZoneConversionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.CannotConvertBetweenTimeZones, EwsUtilities.DateTimeToXSDateTime(dateTime), sourceTimeZone.DisplayName, destinationTimeZone.DisplayName), ex);
        }
    };
    //static CopyStream(source: System.IO.Stream, target: System.IO.Stream): any{ throw new Error("EwsUtilities.ts - static CopyStream : Not implemented.");}
    EwsUtilities.CountMatchingChars = function (str, charPredicate) { throw new Error("EwsUtilities.ts - static CountMatchingChars : Not implemented."); };
    EwsUtilities.CreateEwsObjectFromXmlElementName = function (service, xmlElementName) {
        throw new Error("EwsUtilities - CreateEwsObjectFromXmlElementName: - this is moved in folderinfo/iteminfo classes to avoid circular loop caused by serviceobjectinfo class");
        //     //var itemClass = TypeSystem.GetObjectByClassName("Microsoft.Exchange.WebServices.Data." + xmlElementName
        //     debugger;
        //     //        var creationDelegate = EwsUtilities.serviceObjectInfo.Member.ServiceObjectConstructorsWithServiceParam[xmlElementName];
        //     //
        //     //        if (creationDelegate) {
        //     //            return creationDelegate(service);
        //     //        }
        //     //        else return null;
        //     //var itemClass = EwsUtilities.serviceObjectInfo.Member.XmlElementNameToServiceObjectClassMap[xmlElementName];
        //     //if (itemClass) {
        //     //    //return new itemClass(service);
        //     //    creationDelegate: CreateServiceObjectWithServiceParam;
        //     //    //if (EwsUtilities.serviceObjectInfo.Member.ServiceObjectConstructorsWithServiceParam.TryGetValue(itemClass, out creationDelegate)) {
        //     //    //    return (TServiceObject)creationDelegate(service);
        //     //    //}
        //     //    //else {
        //     //    //    throw new ArgumentException(Strings.NoAppropriateConstructorForItemClass);
        //     //    //}
        //     //}
        //     //else {
        //     //    return null; //default(TServiceObject);
        //     //}
    };
    //static CreateItemFromItemClass(itemAttachment: ItemAttachment, itemClass: System.Type, isNew: boolean): Item{ throw new Error("EwsUtilities.ts - static CreateItemFromItemClass : Not implemented.");}
    EwsUtilities.CreateItemFromXmlElementName = function (itemAttachment, xmlElementName) { throw new Error("EwsUtilities.ts - static CreateItemFromXmlElementName : Not implemented."); };
    EwsUtilities.DateTimeToXSDate = function (date) { return DateTime_1.DateTime.DateTimeToXSDate(date); };
    EwsUtilities.DateTimeToXSDateTime = function (dateTime) { return DateTime_1.DateTime.DateTimeToXSDateTime(dateTime); };
    EwsUtilities.DomainFromEmailAddress = function (emailAddress) {
        var emailAddressParts = emailAddress.split('@');
        if (emailAddressParts.length != 2 || ExtensionMethods_1.StringHelper.IsNullOrEmpty(emailAddressParts[1])) {
            throw new Error(Strings_1.Strings.InvalidEmailAddress);
        }
        return emailAddressParts[1];
    };
    EwsUtilities.EwsToSystemDayOfWeek = function (dayOfTheWeek) {
        if (dayOfTheWeek == DayOfTheWeek_1.DayOfTheWeek.Day ||
            dayOfTheWeek == DayOfTheWeek_1.DayOfTheWeek.Weekday ||
            dayOfTheWeek == DayOfTheWeek_1.DayOfTheWeek.WeekendDay) {
            throw new ArgumentException_1.ArgumentException(ExtensionMethods_1.StringHelper.Format("Cannot convert {0} to System.DayOfWeek enum value", dayOfTheWeek), "dayOfTheWeek");
        }
        else {
            return dayOfTheWeek;
        }
    };
    EwsUtilities.FindFirstItemOfType = function (items, type) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item instanceof type) {
                return item;
            }
        }
    };
    //static ForEach(collection: System.Collections.Generic.IEnumerable<T>, action: any): any{ throw new Error("EwsUtilities.ts - static ForEach : Not implemented.");}
    //static FormatHttpHeaders(headers: System.Net.WebHeaderCollection): string{ throw new Error("EwsUtilities.ts - static FormatHttpHeaders : Not implemented.");}
    //static FormatHttpHeaders(sb: any, headers: System.Net.WebHeaderCollection): any{ throw new Error("EwsUtilities.ts - static FormatHttpHeaders : Not implemented.");}
    //static FormatHttpRequestHeaders(request: IEwsHttpWebRequest): string{ throw new Error("EwsUtilities.ts - static FormatHttpRequestHeaders : Not implemented.");}
    //static FormatHttpRequestHeaders(request: any): string{ throw new Error("EwsUtilities.ts - static FormatHttpRequestHeaders : Not implemented.");}
    EwsUtilities.FormatHttpResponseHeaders = function (response /*IEwsHttpWebResponse*/) { throw new Error("EwsUtilities.ts - static FormatHttpResponseHeaders : Not implemented."); };
    EwsUtilities.FormatLogMessage = function (entryKind, logEntry) { throw new Error("EwsUtilities.ts - static FormatLogMessage : Not implemented."); };
    EwsUtilities.FormatLogMessageWithXmlContent = function (entryKind, memoryStream) { throw new Error("EwsUtilities.ts - static FormatLogMessageWithXmlContent : Not implemented."); };
    EwsUtilities.GetEnumeratedObjectAt = function (objects, index) { throw new Error("EwsUtilities.ts - static GetEnumeratedObjectAt : Not implemented."); };
    EwsUtilities.GetEnumeratedObjectCount = function (objects) { throw new Error("EwsUtilities.ts - static GetEnumeratedObjectCount : Not implemented."); };
    //static GetEnumSchemaName(enumType: System.Type, enumName: string): string{ throw new Error("EwsUtilities.ts - static GetEnumSchemaName : Not implemented.");}
    //static GetEnumVersion(enumType: System.Type, enumName: string): ExchangeVersion{ throw new Error("EwsUtilities.ts - static GetEnumVersion : Not implemented.");}
    //static GetItemTypeFromXmlElementName(xmlElementName: string): System.Type{ throw new Error("EwsUtilities.ts - static GetItemTypeFromXmlElementName : Not implemented.");}
    EwsUtilities.GetNamespaceFromUri = function (namespaceUri) {
        switch (namespaceUri) {
            case this.EwsErrorsNamespace:
                return XmlNamespace_1.XmlNamespace.Errors;
            case this.EwsTypesNamespace:
                return XmlNamespace_1.XmlNamespace.Types;
            case this.EwsMessagesNamespace:
                return XmlNamespace_1.XmlNamespace.Messages;
            case this.EwsSoapNamespace:
                return XmlNamespace_1.XmlNamespace.Soap;
            case this.EwsSoap12Namespace:
                return XmlNamespace_1.XmlNamespace.Soap12;
            case this.EwsXmlSchemaInstanceNamespace:
                return XmlNamespace_1.XmlNamespace.XmlSchemaInstance;
            case this.PassportSoapFaultNamespace:
                return XmlNamespace_1.XmlNamespace.PassportSoapFault;
            case this.WSTrustFebruary2005Namespace:
                return XmlNamespace_1.XmlNamespace.WSTrustFebruary2005;
            case this.WSAddressingNamespace:
                return XmlNamespace_1.XmlNamespace.WSAddressing;
            default:
                return XmlNamespace_1.XmlNamespace.NotSpecified;
        }
    };
    EwsUtilities.GetNamespacePrefix = function (xmlNamespace) {
        switch (xmlNamespace) {
            case XmlNamespace_1.XmlNamespace.Types:
                return EwsUtilities.EwsTypesNamespacePrefix;
            case XmlNamespace_1.XmlNamespace.Messages:
                return EwsUtilities.EwsMessagesNamespacePrefix;
            case XmlNamespace_1.XmlNamespace.Errors:
                return EwsUtilities.EwsErrorsNamespacePrefix;
            case XmlNamespace_1.XmlNamespace.Soap:
            case XmlNamespace_1.XmlNamespace.Soap12:
                return EwsUtilities.EwsSoapNamespacePrefix;
            case XmlNamespace_1.XmlNamespace.XmlSchemaInstance:
                return EwsUtilities.EwsXmlSchemaInstanceNamespacePrefix;
            case XmlNamespace_1.XmlNamespace.PassportSoapFault:
                return EwsUtilities.PassportSoapFaultNamespacePrefix;
            case XmlNamespace_1.XmlNamespace.WSTrustFebruary2005:
                return EwsUtilities.WSTrustFebruary2005NamespacePrefix;
            case XmlNamespace_1.XmlNamespace.WSAddressing:
                return EwsUtilities.WSAddressingNamespacePrefix;
            case XmlNamespace_1.XmlNamespace.Autodiscover:
                return EwsUtilities.AutodiscoverSoapNamespacePrefix;
            default:
                return "";
        }
    };
    EwsUtilities.GetNamespaceUri = function (xmlNamespace) {
        switch (xmlNamespace) {
            case XmlNamespace_1.XmlNamespace.Types:
                return EwsUtilities.EwsTypesNamespace;
            case XmlNamespace_1.XmlNamespace.Messages:
                return EwsUtilities.EwsMessagesNamespace;
            case XmlNamespace_1.XmlNamespace.Errors:
                return EwsUtilities.EwsErrorsNamespace;
            case XmlNamespace_1.XmlNamespace.Soap:
                return EwsUtilities.EwsSoapNamespace;
            case XmlNamespace_1.XmlNamespace.Soap12:
                return EwsUtilities.EwsSoap12Namespace;
            case XmlNamespace_1.XmlNamespace.XmlSchemaInstance:
                return EwsUtilities.EwsXmlSchemaInstanceNamespace;
            case XmlNamespace_1.XmlNamespace.PassportSoapFault:
                return EwsUtilities.PassportSoapFaultNamespace;
            case XmlNamespace_1.XmlNamespace.WSTrustFebruary2005:
                return EwsUtilities.WSTrustFebruary2005Namespace;
            case XmlNamespace_1.XmlNamespace.WSAddressing:
                return EwsUtilities.WSAddressingNamespace;
            case XmlNamespace_1.XmlNamespace.Autodiscover:
                return EwsUtilities.AutodiscoverSoapNamespace;
            default:
                return "";
        }
    };
    EwsUtilities.GetPrintableTypeName = function (type /*instance */) {
        var typename = typeof type;
        if (typename.indexOf("object") >= 0) {
            try {
                typename = type.__proto__.constructor.name;
            }
            catch (error) {
                typename += " - Error getting name";
            }
        }
        return typename;
        //         if (type.IsGenericType)
        //             {
        //                 // Convert generic type to printable form (e.g. List<Item>)
        //                 string genericPrefix = type.Name.Substring(0, type.Name.IndexOf('`'));
        //                 StringBuilder nameBuilder = new StringBuilder(genericPrefix);
        // 
        //                 // Note: building array of generic parameters is done recursively. Each parameter could be any type.
        //                 string[] genericArgs = type.GetGenericArguments().ToList<Type>().ConvertAll<string>(t => GetPrintableTypeName(t)).ToArray<string>();
        // 
        //                 nameBuilder.Append("<");
        //                 nameBuilder.Append(string.Join(",", genericArgs));
        //                 nameBuilder.Append(">");
        //                 return nameBuilder.ToString();
        //             }
        //             else if (type.IsArray)
        //             {
        //                 // Convert array type to printable form.
        //                 string arrayPrefix = type.Name.Substring(0, type.Name.IndexOf('['));
        //                 StringBuilder nameBuilder = new StringBuilder(EwsUtilities.GetSimplifiedTypeName(arrayPrefix));
        //                 for (int rank = 0; rank < type.GetArrayRank(); rank++)
        //                 {
        //                     nameBuilder.Append("[]");
        //                 }
        //                 return nameBuilder.ToString();
        //             }
        //             else
        //             {
        //                 return EwsUtilities.GetSimplifiedTypeName(type.Name);
        //             }
    };
    //static GetSimplifiedTypeName(typeName: string): string{ throw new Error("EwsUtilities.ts - static GetSimplifiedTypeName : Not implemented.");}
    EwsUtilities.IsLocalTimeZone = function (timeZone) { return DateTime_1.TimeZoneInfo.IsLocalTimeZone(timeZone); };
    //static Parse(value: string): any{ throw new Error("EwsUtilities.ts - static Parse : Not implemented.");}
    EwsUtilities.ParseEnum = function (value, ewsenum) { throw new Error("EwsUtilities.ts - static Parse : Not implemented."); };
    EwsUtilities.ParseAsUnbiasedDatetimescopedToServicetimeZone = function (dateString, service) {
        // Convert the element's value to a DateTime with no adjustment.
        var tempDate = DateTime_1.DateTime.Parse(dateString + "Z");
        // Set the kind according to the service's time zone
        if (service.TimeZone == DateTime_1.TimeZoneInfo.Utc) {
            return new DateTime_1.DateTime(tempDate.TotalMilliSeconds, DateTime_1.DateTimeKind.Utc);
        }
        else if (EwsUtilities.IsLocalTimeZone(service.TimeZone)) {
            return new DateTime_1.DateTime(tempDate.TotalMilliSeconds, DateTime_1.DateTimeKind.Local);
        }
        else {
            return new DateTime_1.DateTime(tempDate.TotalMilliSeconds, DateTime_1.DateTimeKind.Unspecified);
        }
    };
    EwsUtilities.ParseEnumValueList = function (list, value, separators, enumType) {
        // EwsLogging.Assert(
        //         typeof(T).IsEnum,
        //         "EwsUtilities.ParseEnumValueList",
        //         "T is not an enum type.");
        var enumValues = value.split(separators);
        for (var _i = 0, enumValues_1 = enumValues; _i < enumValues_1.length; _i++) {
            var enumValue = enumValues_1[_i];
            var enumValueParsed = enumType[enumValue];
            if (typeof enumValueParsed !== 'undefined')
                list.push(enumValueParsed);
        }
    };
    //static SerializeEnum(value: any): string{ throw new Error("EwsUtilities.ts - static SerializeEnum : Not implemented.");}
    EwsUtilities.SystemToEwsDayOfTheWeek = function (dayOfWeek) {
        return dayOfWeek;
    };
    EwsUtilities.TimeSpanToXSDuration = function (timeSpan) {
        // Optional '-' offset
        var offsetStr = (timeSpan.TotalSeconds < 0) ? "-" : ExtensionMethods_1.StringHelper.Empty;
        // The TimeSpan structure does not have a Year or Month 
        // property, therefore we wouldn't be able to return an xs:duration
        // string from a TimeSpan that included the nY or nM components.
        return ExtensionMethods_1.StringHelper.Format("{0}P{1}DT{2}H{3}M{4}S", offsetStr, Math.abs(timeSpan.days()), Math.abs(timeSpan.hours()), Math.abs(timeSpan.minutes()), Math.abs(timeSpan.seconds()) + "." + Math.abs(timeSpan.milliseconds()));
    };
    EwsUtilities.numPad = function (num, length) {
        var str = num.toString();
        while (str.length < length)
            str += "0";
        return str;
    };
    EwsUtilities.TimeSpanToXSTime = function (timeSpan) {
        return ExtensionMethods_1.StringHelper.Format("{0}:{1}:{2}", this.numPad(timeSpan.hours(), 2), this.numPad(timeSpan.minutes(), 2), this.numPad(timeSpan.seconds(), 2));
    };
    EwsUtilities.XSDurationToTimeSpan = function (xsDuration) {
        var regex = /(-)?P(([0-9]+)Y)?(([0-9]+)M)?(([0-9]+)D)?(T(([0-9]+)H)?(([0-9]+)M)?(([0-9]+)(\.([0-9]+))?S)?)?/; //ref: info: not using \\, may be a bug in EWS managed api. does not match "-P2Y6M5DT12H35M30.4S" with \\ //old /(-)?P([0-9]+)Y?([0-9]+)M?([0-9]+)D?T([0-9]+)H?([0-9]+)M?([0-9]+\.[0-9]+)?S?/;
        if (xsDuration.match(regex) === null) {
            throw new ArgumentException_1.ArgumentException(Strings_1.Strings.XsDurationCouldNotBeParsed);
        }
        return new DateTime_2.TimeSpan(xsDuration); //using moment, it recognize the format.
    };
    //static TrueForAll(collection: System.Collections.Generic.IEnumerable<T>, predicate: any): boolean{ throw new Error("EwsUtilities.ts - static TrueForAll : Not implemented.");}
    EwsUtilities.ValidateClassVersion = function (service, minimumServerVersion, className) {
        if (service.RequestedServerVersion < minimumServerVersion) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ClassIncompatibleWithRequestVersion, className, ExchangeVersion_1.ExchangeVersion[minimumServerVersion]));
        }
    };
    EwsUtilities.ValidateDomainNameAllowNull = function (domainName, paramName) {
        //todo: validate domain names per ews managed api
        //if (domainName != null) {
        //    Regex regex = new Regex(DomainRegex);
        //    if (!regex.IsMatch(domainName)) {
        //        throw new ArgumentException(string.Format(Strings.InvalidDomainName, domainName), paramName);
        //    }
        //}
    };
    /**
     * Validates the enum value against the request version.
     *
     * @param   {EnumToExchangeVersionMappingHelper}   enumType        The enum type mapping helper - specific to ews-javascript-api.
     * @param   {number}   enumValue        The enum value.
     * @param   {ExchangeVersion}   requestVersion   The request version.
     */
    EwsUtilities.ValidateEnumVersionValue = function (enumType, enumValue, requestVersion) {
        var enumVersion = this.GetExchangeVersionFromEnumDelegate(enumType, enumValue);
        if (requestVersion < enumVersion) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.EnumValueIncompatibleWithRequestVersion, enumValue, 
            //WellKnownFolderName[folderEnum],
            EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper[enumType], ExchangeVersion_1.ExchangeVersion[enumVersion]));
        }
        //////EwsUtilities.ValidateEnumVersionValue(this.FolderName, version); - alternate validation using next line
        //////todo: move to ewsutilities - done
        ////export class ExchangeVersionValidator {
        ////    static ValidateWellKnownFolderName(folderEnum: WellKnownFolderName, requestedVersion: ExchangeVersion): void {
        ////        var enumVersion = ExchangeVersion.Exchange2007_SP1;
        ////        if (folderEnum <= 15) enumVersion = ExchangeVersion.Exchange2007_SP1;
        ////        else if (folderEnum >= 16 && folderEnum <= 26) enumVersion = ExchangeVersion.Exchange2010_SP1;
        ////        else if (folderEnum >= 27 && folderEnum <= 34) enumVersion = ExchangeVersion.Exchange2013;
        ////        else enumVersion = ExchangeVersion.Exchange2013;
        ////        if (requestedVersion < enumVersion) {
        ////            throw new ServiceVersionException(
        ////                string.Format(
        ////                    Strings.EnumValueIncompatibleWithRequestVersion,
        ////                    WellKnownFolderName[folderEnum],
        ////                    "WellKnownFolderName",
        ////                    ExchangeVersion[enumVersion]));
        ////        }
        ////    }
        ////}
    };
    EwsUtilities.ValidateMethodVersion = function (service, minimumServerVersion, methodName) {
        if (service.RequestedServerVersion < minimumServerVersion) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.MethodIncompatibleWithRequestVersion, methodName, ExchangeVersion_1.ExchangeVersion[minimumServerVersion]));
        }
    };
    /**
     * Validates string parameter to be non-empty string (null value not allowed).
     *
     * @param   {string}   param       The string parameter.
     * @param   {string}   paramName   Name of the parameter.
     */
    EwsUtilities.ValidateNonBlankStringParam = function (param, paramName) {
        if (param == null) {
            throw new ArgumentException_1.ArgumentNullException(paramName);
        }
        this.ValidateNonBlankStringParamAllowNull(param, paramName);
    };
    /**
     * Validates string parameter to be non-empty string (null value allowed).
     *
     * @param   {string}   param       The string parameter.
     * @param   {string}   paramName   Name of the parameter.
     */
    EwsUtilities.ValidateNonBlankStringParamAllowNull = function (param, paramName) {
        if (param) {
            // Non-empty string has at least one character which is *not* a whitespace character
            if (param.replace(/\s*/g, '').length === 0) {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.ArgumentIsBlankString, paramName);
            }
        }
    };
    /**
     * Validates parameter (null value not allowed).
     *
     * @param   {any}       param       The param.
     * @param   {string}    paramName   Name of the param.
     */
    EwsUtilities.ValidateParam = function (param, paramName) {
        var isValid = false;
        if (typeof (param) == "string") {
            isValid = !ExtensionMethods_1.StringHelper.IsNullOrEmpty(param);
        }
        else {
            isValid = param != null && typeof (param) !== 'undefined';
        }
        if (!isValid) {
            throw new ArgumentException_1.ArgumentNullException(paramName);
        }
        this.ValidateParamAllowNull(param, paramName);
    };
    /**
     * Validates parameter (and allows null value).
     *
     * @param   {any}       param       The param.
     * @param   {string}    paramName   Name of the param.
     */
    EwsUtilities.ValidateParamAllowNull = function (param, paramName) {
        var selfValidate = param;
        // look for null/undefined
        if (false && selfValidate && selfValidate.Validate) {
            try {
                selfValidate.Validate();
            }
            catch (e) {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.ValidationFailed, paramName, e);
            }
        }
        var ewsObject = param;
        if (ewsObject instanceof TypeContainer_1.TypeContainer.ServiceObject) {
            if (ewsObject.IsNew) {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.ObjectDoesNotHaveId, paramName);
            }
        }
    };
    /**
     * Validates parameter collection.
     *
     * @param   {any[]}     collection   The collection.
     * @param   {string}    paramName    Name of the param.
     */
    EwsUtilities.ValidateParamCollection = function (collection, paramName) {
        this.ValidateParam(collection, paramName);
        var count = 0;
        for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
            var obj = collection_1[_i];
            try {
                this.ValidateParam(obj, ExtensionMethods_1.StringHelper.Format("collection[{0}]", count));
            }
            catch (e) {
                throw new ArgumentException_1.ArgumentException(ExtensionMethods_1.StringHelper.Format("The element at position {0} is invalid", count), paramName, e);
            }
            count++;
        }
        if (count == 0) {
            throw new ArgumentException_1.ArgumentException(Strings_1.Strings.CollectionIsEmpty, paramName);
        }
    };
    /**
     * Validates property version against the request version.
     *
     * @param   {ExchangeService}   service                The Exchange service.
     * @param   {ExchangeVersion}   minimumServerVersion   The minimum server version that supports the property.
     * @param   {string}            propertyName           Name of the property.
     */
    EwsUtilities.ValidatePropertyVersion = function (service, minimumServerVersion, propertyName) {
        if (service.RequestedServerVersion < minimumServerVersion) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, propertyName, ExchangeVersion_1.ExchangeVersion[minimumServerVersion]));
        }
    };
    EwsUtilities.ValidateServiceObjectVersion = function (serviceObject, requestVersion) { throw new Error("EwsUtilities.ts - static ValidateServiceObjectVersion : Not implemented."); };
    //#region constants in c# - typescript static
    EwsUtilities.XSFalse = "false";
    EwsUtilities.XSTrue = "true";
    EwsUtilities.EwsTypesNamespacePrefix = "t";
    EwsUtilities.EwsMessagesNamespacePrefix = "m";
    EwsUtilities.EwsErrorsNamespacePrefix = "e";
    EwsUtilities.EwsSoapNamespacePrefix = "soap";
    EwsUtilities.EwsXmlSchemaInstanceNamespacePrefix = "xsi";
    EwsUtilities.PassportSoapFaultNamespacePrefix = "psf";
    EwsUtilities.WSTrustFebruary2005NamespacePrefix = "wst";
    EwsUtilities.WSAddressingNamespacePrefix = "wsa";
    EwsUtilities.AutodiscoverSoapNamespacePrefix = "a";
    EwsUtilities.WSSecurityUtilityNamespacePrefix = "wsu";
    EwsUtilities.WSSecuritySecExtNamespacePrefix = "wsse";
    EwsUtilities.EwsTypesNamespace = "http://schemas.microsoft.com/exchange/services/2006/types";
    EwsUtilities.EwsMessagesNamespace = "http://schemas.microsoft.com/exchange/services/2006/messages";
    EwsUtilities.EwsErrorsNamespace = "http://schemas.microsoft.com/exchange/services/2006/errors";
    EwsUtilities.EwsSoapNamespace = "http://schemas.xmlsoap.org/soap/envelope/";
    EwsUtilities.EwsSoap12Namespace = "http://www.w3.org/2003/05/soap-envelope";
    EwsUtilities.EwsXmlSchemaInstanceNamespace = "http://www.w3.org/2001/XMLSchema-instance";
    EwsUtilities.PassportSoapFaultNamespace = "http://schemas.microsoft.com/Passport/SoapServices/SOAPFault";
    EwsUtilities.WSTrustFebruary2005Namespace = "http://schemas.xmlsoap.org/ws/2005/02/trust";
    EwsUtilities.WSAddressingNamespace = "http://www.w3.org/2005/08/addressing";
    EwsUtilities.AutodiscoverSoapNamespace = "http://schemas.microsoft.com/exchange/2010/Autodiscover";
    EwsUtilities.WSSecurityUtilityNamespace = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd";
    EwsUtilities.WSSecuritySecExtNamespace = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd";
    /// <summary>
    /// Regular expression for legal domain names.
    /// </summary>
    EwsUtilities.DomainRegex = "^[-a-zA-Z0-9_.]+$";
    // private static serviceObjectInfo: LazyMember<ServiceObjectInfo> = new LazyMember<ServiceObjectInfo>(
    //     () => {
    //         //return new ServiceObjectInfo();
    //     });
    //private static buildVersion: LazyMember<T>;
    EwsUtilities.enumVersionDictionaries = new LazyMember_1.LazyMember(function () {
        var e2evmh = EnumToExchangeVersionMappingHelper_1.EnumToExchangeVersionMappingHelper;
        var dict = {};
        dict[e2evmh[e2evmh.WellKnownFolderName]] = EwsUtilities.BuildEnumDict(e2evmh.WellKnownFolderName);
        dict[e2evmh[e2evmh.ItemTraversal]] = EwsUtilities.BuildEnumDict(e2evmh.ItemTraversal);
        dict[e2evmh[e2evmh.ConversationQueryTraversal]] = EwsUtilities.BuildEnumDict(e2evmh.ConversationQueryTraversal);
        dict[e2evmh[e2evmh.FileAsMapping]] = EwsUtilities.BuildEnumDict(e2evmh.FileAsMapping);
        dict[e2evmh[e2evmh.EventType]] = EwsUtilities.BuildEnumDict(e2evmh.EventType);
        dict[e2evmh[e2evmh.MeetingRequestsDeliveryScope]] = EwsUtilities.BuildEnumDict(e2evmh.MeetingRequestsDeliveryScope);
        dict[e2evmh[e2evmh.ViewFilter]] = EwsUtilities.BuildEnumDict(e2evmh.ViewFilter);
        dict[e2evmh[e2evmh.MailboxType]] = EwsUtilities.BuildEnumDict(e2evmh.MailboxType);
        return dict;
    });
    return EwsUtilities;
}());
exports.EwsUtilities = EwsUtilities;
