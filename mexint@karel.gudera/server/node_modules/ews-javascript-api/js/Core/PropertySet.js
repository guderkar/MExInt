"use strict";
var Strings_1 = require("../Strings");
var PropertyDefinitionFlags_1 = require("../Enumerations/PropertyDefinitionFlags");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var ServiceVersionException_1 = require("../Exceptions/ServiceVersionException");
var BasePropertySet_1 = require("../Enumerations/BasePropertySet");
var BodyType_1 = require("../Enumerations/BodyType");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ServiceObjectType_1 = require("../Enumerations/ServiceObjectType");
var EwsUtilities_1 = require("./EwsUtilities");
var PropertyDefinition_1 = require("../PropertyDefinitions/PropertyDefinition");
var LazyMember_1 = require("./LazyMember");
var EwsLogging_1 = require("../Core/EwsLogging");
var ExtensionMethods_1 = require("../ExtensionMethods");
var AltDictionary_1 = require("../AltDictionary");
//todo: should be done except for debugger stops
var PropertySet /*implements ISelfValidate*/ = (function () {
    //constructor();
    //constructor(basePropertySet:BasePropertySet);
    //constructor(additionalProperties: PropertyDefinitionBase[]);
    function PropertySet /*implements ISelfValidate*/(basePropertySet, additionalProperties) {
        if (basePropertySet === void 0) { basePropertySet = BasePropertySet_1.BasePropertySet.IdOnly; }
        this.additionalProperties = []; // System.Collections.Generic.List<PropertyDefinitionBase>;
        this.basePropertySet = basePropertySet;
        if (additionalProperties) {
            this.additionalProperties.push.apply(this.additionalProperties, additionalProperties); //todo: addrange for array - http://typescript.codeplex.com/workitem/1422
        }
    }
    Object.defineProperty(PropertySet /*implements ISelfValidate*/, "DefaultPropertySetMap", {
        //using DefaultPropertySetDictionary = LazyMember<System.Collections.Generic.Dictionary<BasePropertySet, string>>;
        get: function () { return this.defaultPropertySetMap; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "BasePropertySet", {
        get: function () { return this.basePropertySet; },
        set: function (value) { this.ThrowIfReadonly(); this.basePropertySet = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "RequestedBodyType", {
        get: function () { return this.requestedBodyType; },
        set: function (value) { this.ThrowIfReadonly(); this.requestedBodyType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "RequestedUniqueBodyType", {
        get: function () { return this.requestedUniqueBodyType; },
        set: function (value) { this.ThrowIfReadonly(); this.requestedUniqueBodyType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "RequestedNormalizedBodyType", {
        get: function () { return this.requestedNormalizedBodyType; },
        set: function (value) { this.ThrowIfReadonly(); this.requestedNormalizedBodyType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "Count", {
        get: function () { return this.additionalProperties.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "FilterHtmlContent", {
        get: function () { return this.filterHtml; } //todo - nullable properties implementations;
        ,
        set: function (value) { this.ThrowIfReadonly(); this.filterHtml = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "ConvertHtmlCodePageToUTF8", {
        get: function () { return this.convertHtmlCodePageToUTF8; },
        set: function (value) { this.ThrowIfReadonly(); this.convertHtmlCodePageToUTF8 = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "InlineImageUrlTemplate", {
        get: function () { return this.inlineImageUrlTemplate; },
        set: function (value) { this.ThrowIfReadonly(); this.inlineImageUrlTemplate = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "BlockExternalImages", {
        get: function () { return this.blockExternalImages; },
        set: function (value) { this.ThrowIfReadonly(); this.blockExternalImages = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "AddBlankTargetToLinks", {
        get: function () { return this.addTargetToLinks; },
        set: function (value) { this.ThrowIfReadonly(); this.addTargetToLinks = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet /*implements ISelfValidate*/.prototype, "MaximumBodySize", {
        get: function () { return this.maximumBodySize; },
        set: function (value) { this.ThrowIfReadonly(); this.maximumBodySize = value; },
        enumerable: true,
        configurable: true
    });
    PropertySet /*implements ISelfValidate*/.prototype._getItem = function (index) { return this.additionalProperties[index]; }; //this[int]
    PropertySet /*implements ISelfValidate*/.prototype.Add = function (property) {
        this.ThrowIfReadonly();
        EwsUtilities_1.EwsUtilities.ValidateParam(property, "property");
        if (this.additionalProperties.indexOf(property) === -1) {
            this.additionalProperties.push(property);
        }
    };
    PropertySet /*implements ISelfValidate*/.prototype.AddRange = function (properties /*System.Collections.Generic.IEnumerable<T>*/) {
        this.ThrowIfReadonly();
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(properties, "properties");
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            this.Add(property);
        }
    };
    PropertySet /*implements ISelfValidate*/.prototype.Clear = function () {
        this.ThrowIfReadonly();
        this.additionalProperties.splice(0);
    };
    PropertySet /*implements ISelfValidate*/.prototype.Contains = function (property) { return this.additionalProperties.indexOf(property) !== -1; };
    PropertySet /*implements ISelfValidate*/.CreateReadonlyPropertySet = function (basePropertySet) {
        var propertySet = new PropertySet(basePropertySet);
        propertySet.isReadOnly = true;
        return propertySet;
    };
    PropertySet /*implements ISelfValidate*/.prototype.GetEnumerator = function () { throw new Error("PropertySet.ts - GetEnumerator : Not implemented."); };
    PropertySet /*implements ISelfValidate*/.prototype.GetShapeName = function (serviceObjectType) {
        switch (serviceObjectType) {
            case ServiceObjectType_1.ServiceObjectType.Item:
                return XmlElementNames_1.XmlElementNames.ItemShape;
            case ServiceObjectType_1.ServiceObjectType.Folder:
                return XmlElementNames_1.XmlElementNames.FolderShape;
            case ServiceObjectType_1.ServiceObjectType.Conversation:
                return XmlElementNames_1.XmlElementNames.ConversationShape;
            default:
                EwsLogging_1.EwsLogging.Assert(false, "PropertySet.GetShapeName", ExtensionMethods_1.StringHelper.Format("An unexpected object type {0} for property shape. This code path should never be reached.", serviceObjectType));
                return ExtensionMethods_1.StringHelper.Empty;
        }
    };
    PropertySet /*implements ISelfValidate*/.prototype.InternalValidate = function () {
        for (var i = 0; i < this.additionalProperties.length; i++) {
            if (this.additionalProperties[i] == null) {
                throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.AdditionalPropertyIsNull, i));
            }
        }
    };
    PropertySet /*implements ISelfValidate*/.prototype.Remove = function (property) {
        this.ThrowIfReadonly();
        var index = this.additionalProperties.indexOf(property);
        return typeof (this.additionalProperties.splice(index)) !== undefined; // .Remove(property);
    };
    PropertySet /*implements ISelfValidate*/.prototype.ThrowIfReadonly = function () {
        if (this.isReadOnly) {
            throw new Error(" PropertySet can not be modified"); // System.NotSupportedException(Strings.PropertySetCannotBeModified);
        }
    };
    PropertySet /*implements ISelfValidate*/.prototype.Validate = function () {
        this.InternalValidate();
    };
    /**@internal */
    PropertySet /*implements ISelfValidate*/.prototype.ValidateForRequest = function (request, summaryPropertiesOnly) {
        for (var _i = 0, _a = this.additionalProperties; _i < _a.length; _i++) {
            var propDefBase = _a[_i];
            //var propDefBase: PropertyDefinitionBase = propItem;
            var propertyDefinition = propDefBase;
            if (propertyDefinition instanceof PropertyDefinition_1.PropertyDefinition /* != null*/) {
                if (propertyDefinition.Version > request.Service.RequestedServerVersion) {
                    throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, propertyDefinition.Name, ExchangeVersion_1.ExchangeVersion[propertyDefinition.Version]));
                }
                if (summaryPropertiesOnly && !propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, request.Service.RequestedServerVersion)) {
                    throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.NonSummaryPropertyCannotBeUsed, propertyDefinition.Name, request.GetXmlElementName()));
                }
            }
        }
        if (this.FilterHtmlContent /*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2010) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "FilterHtmlContent", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2010]));
            }
        }
        if (this.ConvertHtmlCodePageToUTF8 /*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "ConvertHtmlCodePageToUTF8", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1]));
            }
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.InlineImageUrlTemplate)) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "InlineImageUrlTemplate", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
            }
        }
        if (this.BlockExternalImages /*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "BlockExternalImages", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
            }
        }
        if (this.AddBlankTargetToLinks /*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "AddTargetToLinks", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
            }
        }
        if (this.MaximumBodySize /*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "MaximumBodySize", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
            }
        }
    };
    PropertySet /*implements ISelfValidate*/.WriteAdditionalPropertiesToXml = function (writer, propertyDefinitions) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AdditionalProperties);
        for (var _i = 0, propertyDefinitions_1 = propertyDefinitions; _i < propertyDefinitions_1.length; _i++) {
            var propertyDefinition = propertyDefinitions_1[_i];
            propertyDefinition.WriteToXml(writer);
        }
        writer.WriteEndElement();
    };
    //WriteGetShapeToJson(jsonRequest: JsonObject, service: ExchangeService, serviceObjectType: ServiceObjectType): any { throw new Error("PropertySet.ts - WriteGetShapeToJson : Not implemented."); }
    PropertySet /*implements ISelfValidate*/.prototype.WriteToXml = function (writer, serviceObjectType) {
        var shapeElementName = this.GetShapeName(serviceObjectType);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, shapeElementName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.BaseShape, PropertySet.defaultPropertySetMap.Member.get(this.BasePropertySet));
        if (serviceObjectType == ServiceObjectType_1.ServiceObjectType.Item) {
            if (this.RequestedBodyType /*.HasValue*/) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.BodyType, BodyType_1.BodyType[this.RequestedBodyType] /*.Value*/);
            }
            if (this.RequestedUniqueBodyType /*.HasValue*/) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.UniqueBodyType, BodyType_1.BodyType[this.RequestedUniqueBodyType] /*.Value*/);
            }
            if (this.RequestedNormalizedBodyType /*.HasValue*/) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.NormalizedBodyType, BodyType_1.BodyType[this.RequestedNormalizedBodyType] /*.Value*/);
            }
            if (this.FilterHtmlContent /*.HasValue*/) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FilterHtmlContent, this.FilterHtmlContent /*.Value*/);
            }
            if (this.ConvertHtmlCodePageToUTF8 /*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ConvertHtmlCodePageToUTF8, this.ConvertHtmlCodePageToUTF8 /*.Value*/);
            }
            if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.InlineImageUrlTemplate) &&
                writer.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.InlineImageUrlTemplate, this.InlineImageUrlTemplate);
            }
            if (this.BlockExternalImages /*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.BlockExternalImages, this.BlockExternalImages /*.Value*/);
            }
            if (this.AddBlankTargetToLinks /*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AddBlankTargetToLinks, this.AddBlankTargetToLinks /*.Value*/);
            }
            if (this.MaximumBodySize /*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MaximumBodySize, this.MaximumBodySize /*.Value*/);
            }
        }
        if (this.additionalProperties.length > 0) {
            PropertySet.WriteAdditionalPropertiesToXml(writer, this.additionalProperties);
        }
        writer.WriteEndElement(); // Item/FolderShape
    };
    PropertySet /*implements ISelfValidate*/.IdOnly = PropertySet.CreateReadonlyPropertySet(BasePropertySet_1.BasePropertySet.IdOnly);
    PropertySet /*implements ISelfValidate*/.FirstClassProperties = PropertySet.CreateReadonlyPropertySet(BasePropertySet_1.BasePropertySet.FirstClassProperties); // static readonly
    PropertySet /*implements ISelfValidate*/.defaultPropertySetMap = new LazyMember_1.LazyMember(function () {
        var result = new AltDictionary_1.Dictionary(function (bps) { return BasePropertySet_1.BasePropertySet[bps]; });
        result.Add(BasePropertySet_1.BasePropertySet.IdOnly, "IdOnly");
        result.Add(BasePropertySet_1.BasePropertySet.FirstClassProperties, "AllProperties");
        return result;
    });
    return PropertySet /*implements ISelfValidate*/;
}());
exports.PropertySet /*implements ISelfValidate*/ = PropertySet /*implements ISelfValidate*/;
