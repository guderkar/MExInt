"use strict";
var Strings_1 = require("../Strings");
var ServiceVersionException_1 = require("../Exceptions/ServiceVersionException");
var ServiceObjectPropertyException_1 = require("../Exceptions/ServiceObjectPropertyException");
var ComplexProperty_1 = require("../ComplexProperties/ComplexProperty");
var ComplexPropertyDefinitionBase_1 = require("../PropertyDefinitions/ComplexPropertyDefinitionBase");
var BasePropertySet_1 = require("../Enumerations/BasePropertySet");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var PropertyDefinitionFlags_1 = require("../Enumerations/PropertyDefinitionFlags");
var EwsUtilities_1 = require("./EwsUtilities");
var EwsLogging_1 = require("./EwsLogging");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var AltDictionary_1 = require("../AltDictionary");
var ExtensionMethods_1 = require("../ExtensionMethods");
var TypeContainer_1 = require("../TypeContainer");
//todo: should be done
var PropertyBag = (function () {
    function PropertyBag(owner) {
        this.owner = undefined;
        this.loadedProperties = []; //System.Collections.Generic.List<PropertyDefinition>;
        this.properties = new AltDictionary_1.DictionaryWithPropertyDefitionKey(); //System.Collections.Generic.Dictionary<PropertyDefinition, any>;
        this.deletedProperties = new AltDictionary_1.DictionaryWithPropertyDefitionKey(); // System.Collections.Generic.Dictionary<PropertyDefinition, any>;
        this.modifiedProperties = []; //System.Collections.Generic.List<PropertyDefinition>;
        this.addedProperties = []; //System.Collections.Generic.List<PropertyDefinition>;
        EwsLogging_1.EwsLogging.Assert(owner != null, "PropertyBag.ctor", "owner is null");
        this.owner = owner;
    }
    Object.defineProperty(PropertyBag.prototype, "Properties", {
        get: function () { return this.properties; } //System.Collections.Generic.Dictionary<PropertyDefinition, any>;
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyBag.prototype, "Owner", {
        get: function () { return this.owner; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyBag.prototype, "IsDirty", {
        get: function () {
            var changes = this.modifiedProperties.length + this.deletedProperties.length + this.addedProperties.length;
            return changes > 0 || this.isDirty;
        },
        enumerable: true,
        configurable: true
    });
    PropertyBag.AddToChangeList = function (propertyDefinition, changeList /*System.Collections.Generic.List<PropertyDefinition>*/) {
        if (changeList.indexOf(propertyDefinition) < 0) {
            changeList.push(propertyDefinition);
        }
    };
    /**
     * @internal unstable
     */
    PropertyBag.prototype.Changed = function () {
        this.isDirty = true;
        this.owner.Changed();
    };
    PropertyBag.prototype.Clear = function () {
        this.ClearChangeLog();
        this.properties.clear();
        this.loadedProperties.splice(0);
        this.requestedPropertySet = undefined;
    };
    PropertyBag.prototype.ClearChangeLog = function () {
        this.deletedProperties.clear();
        this.modifiedProperties.splice(0);
        this.addedProperties.splice(0);
        for (var _i = 0, _a = this.properties.Values; _i < _a.length; _i++) {
            var val = _a[_i];
            var complexProperty = val;
            if (complexProperty instanceof ComplexProperty_1.ComplexProperty) {
                complexProperty.ClearChangeLog();
            }
        }
        this.isDirty = false;
    };
    PropertyBag.prototype.Contains = function (propertyDefinition) { return this.properties.containsKey(propertyDefinition); };
    //CreateJsonDeleteUpdate(propertyDefinition: PropertyDefinitionBase, service: ExchangeService, serviceObject: ServiceObject): JsonObject { throw new Error("PropertyBag.ts - CreateJsonDeleteUpdate : Not implemented."); }
    //CreateJsonSetUpdate(propertyDefinition: PropertyDefinition, service: ExchangeService, serviceObject: ServiceObject, propertyBag: PropertyBag): JsonObject { throw new Error("PropertyBag.ts - CreateJsonSetUpdate : Not implemented."); }
    //CreateJsonSetUpdate(value: ExtendedProperty, service: ExchangeService, serviceObject: ServiceObject): JsonObject { throw new Error("PropertyBag.ts - CreateJsonSetUpdate : Not implemented."); }
    PropertyBag.prototype.DeleteProperty = function (propertyDefinition) {
        if (!this.deletedProperties.containsKey(propertyDefinition)) {
            var propertyValue = { outValue: null };
            this.properties.tryGetValue(propertyDefinition, propertyValue);
            this.properties.remove(propertyDefinition);
            var modifiedIndex = this.modifiedProperties.indexOf(propertyDefinition);
            if (modifiedIndex >= 0)
                this.modifiedProperties.splice(modifiedIndex, 1);
            this.deletedProperties.Add(propertyDefinition, propertyValue);
            var complexProperty = propertyValue;
            if (complexProperty instanceof ComplexProperty_1.ComplexProperty) {
                var onchangeIndex = complexProperty.OnChange.indexOf(this.PropertyChanged);
                complexProperty.OnChange.splice(onchangeIndex, 1); // -= this.PropertyChanged; // counld not do c# like event -= in js
            }
        }
    };
    PropertyBag.prototype.GetIsUpdateCallNecessary = function () {
        var propertyDefinitions = [];
        propertyDefinitions = propertyDefinitions.concat(this.addedProperties);
        propertyDefinitions = propertyDefinitions.concat(this.modifiedProperties);
        propertyDefinitions = propertyDefinitions.concat(this.deletedProperties.Keys);
        for (var _i = 0, propertyDefinitions_1 = propertyDefinitions; _i < propertyDefinitions_1.length; _i++) {
            var item = propertyDefinitions_1[_i];
            var propertyDefinition = item;
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate)) {
                return true;
            }
        }
        return false;
    };
    PropertyBag.GetPropertyUpdateItemName = function (serviceObject) {
        return serviceObject instanceof TypeContainer_1.TypeContainer.Folder ?
            XmlElementNames_1.XmlElementNames.Folder :
            XmlElementNames_1.XmlElementNames.Item;
    };
    PropertyBag.prototype.GetPropertyValueOrException = function (propertyDefinition, exception) {
        var propertyValue = { outValue: null };
        if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
            exception.outValue = new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, propertyDefinition.Name, ExchangeVersion_1.ExchangeVersion[propertyDefinition.Version]));
            return null;
        }
        if (this.TryGetValue(propertyDefinition, propertyValue)) {
            // If the requested property is in the bag, return it.
            return propertyValue.outValue;
        }
        else {
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead)) {
                // The requested property is an auto-instantiate-on-read property
                var complexPropertyDefinition = propertyDefinition;
                EwsLogging_1.EwsLogging.Assert((complexPropertyDefinition instanceof ComplexPropertyDefinitionBase_1.ComplexPropertyDefinitionBase), "PropertyBag.get_this[]", "propertyDefinition is marked with AutoInstantiateOnRead but is not a descendant of ComplexPropertyDefinitionBase");
                propertyValue.outValue = complexPropertyDefinition.CreatePropertyInstance(this.Owner);
                if (propertyValue.outValue != null) {
                    this.InitComplexProperty(propertyValue.outValue);
                    this.properties.set(propertyDefinition, propertyValue.outValue);
                }
            }
            else {
                // If the property is not the Id (we need to let developers read the Id when it's null) and if has
                // not been loaded, we throw.
                if (propertyDefinition != this.Owner.GetIdPropertyDefinition()) {
                    if (!this.IsPropertyLoaded(propertyDefinition)) {
                        exception.outValue = new ServiceObjectPropertyException_1.ServiceObjectPropertyException(Strings_1.Strings.MustLoadOrAssignPropertyBeforeAccess, propertyDefinition);
                        return null;
                    }
                    // Non-nullable properties (int, bool, etc.) must be assigned or loaded; cannot return null value.
                    if (!propertyDefinition.IsNullable) {
                        var errorMessage = this.IsRequestedProperty(propertyDefinition)
                            ? Strings_1.Strings.ValuePropertyNotLoaded
                            : Strings_1.Strings.ValuePropertyNotAssigned;
                        exception.outValue = new ServiceObjectPropertyException_1.ServiceObjectPropertyException(errorMessage, propertyDefinition);
                    }
                }
            }
            return propertyValue.outValue;
        }
    };
    PropertyBag.prototype.InitComplexProperty = function (complexProperty) {
        if (complexProperty) {
            complexProperty.OnChange.push(this.PropertyChanged); // can't do += in javascript;
            //var isIOwnedProperty = Object.keys(complexProperty).indexOf("Owner") >= 0; //todo: until fix checking interface by some other means, checking property directly
            var isIOwnedProperty = complexProperty["___implementsInterface"].indexOf("IOwnedProperty") >= 0;
            if (isIOwnedProperty) {
                var ownedProperty = complexProperty;
                ownedProperty.Owner = this.Owner;
            }
        }
    };
    PropertyBag.prototype.IsPropertyLoaded = function (propertyDefinition) {
        // Is the property loaded?
        if (this.loadedProperties.indexOf(propertyDefinition) >= 0) {
            return true;
        }
        else {
            // Was the property requested?
            return this.IsRequestedProperty(propertyDefinition);
        }
    };
    PropertyBag.prototype.IsPropertyUpdated = function (propertyDefinition) {
        return this.modifiedProperties.indexOf(propertyDefinition) >= 0 || this.addedProperties.indexOf(propertyDefinition) >= 0;
    };
    PropertyBag.prototype.IsRequestedProperty = function (propertyDefinition) {
        // If no requested property set, then property wasn't requested.
        if (this.requestedPropertySet == null || this.requestedPropertySet == undefined) {
            return false;
        }
        // If base property set is all first-class properties, use the appropriate list of
        // property definitions to see if this property was requested. Otherwise, property had
        // to be explicitly requested and needs to be listed in AdditionalProperties.
        if (this.requestedPropertySet.BasePropertySet == BasePropertySet_1.BasePropertySet.FirstClassProperties) {
            var firstClassProps = this.onlySummaryPropertiesRequested
                ? this.Owner.Schema.FirstClassSummaryProperties
                : this.Owner.Schema.FirstClassProperties;
            return firstClassProps.indexOf(propertyDefinition) >= 0 ||
                this.requestedPropertySet.Contains(propertyDefinition);
        }
        else {
            return this.requestedPropertySet.Contains(propertyDefinition);
        }
    };
    //LoadFromJson(jsonServiceObject: JsonObject, service: ExchangeService, clear: boolean, requestedPropertySet: PropertySet, onlySummaryPropertiesRequested: boolean): any { throw new Error("PropertyBag.ts - LoadFromJson : Not implemented."); }
    PropertyBag.prototype.LoadFromXmlJsObject = function (jsObject, service, clear, requestedPropertySet, onlySummaryPropertiesRequested) {
        if (clear) {
            this.Clear();
        }
        // Put the property bag in "loading" mode. When in loading mode, no checking is done
        // when setting property values.
        this.loading = true;
        this.requestedPropertySet = requestedPropertySet;
        this.onlySummaryPropertiesRequested = onlySummaryPropertiesRequested;
        try {
            for (var key in jsObject) {
                if (key.indexOf("__") === 0)
                    continue;
                if (jsObject.hasOwnProperty(key)) {
                    var element = jsObject[key];
                    var propertyDefinition = { outValue: null };
                    if (this.owner.Schema.TryGetPropertyDefinition(key, propertyDefinition)) {
                        EwsLogging_1.EwsLogging.Assert(false, EwsUtilities_1.EwsUtilities.GetPrintableTypeName(propertyDefinition.outValue), "\t\tLoading property :\t\t" + key);
                        propertyDefinition.outValue.LoadPropertyValueFromXmlJsObject(element, service, this);
                        this.loadedProperties.push(propertyDefinition.outValue);
                        EwsLogging_1.EwsLogging.DebugLog(this._getItem(propertyDefinition.outValue), true); //todo:remove this after testing
                    }
                }
            }
            //            var objTypeName: string = jsObject["__type"];
            //            if (StringHelper.IsNullOrEmpty(objTypeName)) {
            //                objTypeName = TypeSystem.GetJsObjectTypeName(jsObject);
            //                jsObject = jsObject[objTypeName];
            //            }
            //            if (StringHelper.IsNullOrEmpty(objTypeName))
            //                throw new Error("error determining typename");
            //
            //            var propertyDefinition: IOutParam<PropertyDefinition> = { value: null };
            //
            //            if (this.Owner.Schema.TryGetPropertyDefinition(objTypeName, propertyDefinition)) {
            //                propertyDefinition.outValue.LoadPropertyValueFromXmlJsObject(jsObject, this);
            //
            //                this.loadedProperties.push(propertyDefinition.outValue);
            //            }
            this.ClearChangeLog();
        }
        catch (exception) {
            EwsLogging_1.EwsLogging.Log(exception);
        }
        finally {
            this.loading = false;
        }
    };
    PropertyBag.prototype.PropertyChanged = function (complexProperty) {
        for (var _i = 0, _a = this.properties.Items; _i < _a.length; _i++) {
            var item = _a[_i];
            var keyValuePair = item;
            if (keyValuePair.value == complexProperty) {
                if (!this.deletedProperties.containsKey(keyValuePair.key)) {
                    PropertyBag.AddToChangeList(keyValuePair.key, this.modifiedProperties);
                    this.Changed();
                }
            }
        }
    };
    PropertyBag.prototype._getItem = function (propertyDefinition) {
        var serviceException = { outValue: null, exception: null };
        var propertyValue = this.GetPropertyValueOrException(propertyDefinition, serviceException);
        if (serviceException.outValue === null) {
            return propertyValue;
        }
        else {
            throw serviceException.exception;
        }
    };
    PropertyBag.prototype._setItem = function (propertyDefinition, value) {
        if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, propertyDefinition.Name, ExchangeVersion_1.ExchangeVersion[propertyDefinition.Version]), null);
        }
        // If the property bag is not in the loading state, we need to verify whether
        // the property can actually be set or updated.
        if (!this.loading) {
            // If the owner is new and if the property cannot be set, throw.
            if (this.Owner.IsNew && !propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet, this.Owner.Service.RequestedServerVersion)) {
                throw new Error("property is readonly\n" + JSON.stringify(propertyDefinition)); //  ServiceObjectPropertyException(Strings.PropertyIsReadOnly, propertyDefinition);
            }
            if (!this.Owner.IsNew) {
                // If owner is an item attachment, properties cannot be updated (EWS doesn't support updating item attachments)
                var isItem = this.owner instanceof TypeContainer_1.TypeContainer.Item; //ref: //info: TypeContainer contains constructor of Item (not instance) to evade circular dependency. Assigned at bootstarp
                //debugger;
                //var ownerItem = <Item>this.Owner; - implemented IsAttachment on service object to remove dependency to Item object.
                if (isItem && this.owner.IsAttachment) {
                    throw new ServiceObjectPropertyException_1.ServiceObjectPropertyException(Strings_1.Strings.ItemAttachmentCannotBeUpdated, propertyDefinition);
                }
                // If the property cannot be deleted, throw.
                if (value == null && !propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete)) {
                    throw new ServiceObjectPropertyException_1.ServiceObjectPropertyException(Strings_1.Strings.PropertyCannotBeDeleted, propertyDefinition);
                }
                // If the property cannot be updated, throw.
                if (!propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate)) {
                    throw new ServiceObjectPropertyException_1.ServiceObjectPropertyException(Strings_1.Strings.PropertyCannotBeUpdated, propertyDefinition);
                }
            }
        }
        // If the value is set to null, delete the property.
        if (value == null) {
            this.DeleteProperty(propertyDefinition);
        }
        else {
            var complexProperty = null;
            var currentValue = this.properties.get(propertyDefinition);
            if (currentValue) {
                complexProperty = currentValue;
                if (complexProperty instanceof ComplexProperty_1.ComplexProperty) {
                    var pos = complexProperty.OnChange.indexOf(this.PropertyChanged); //cant do += or -= in javascript (hopefully in ECMA6)
                    if (pos >= 0)
                        complexProperty.OnChange.splice(pos, 1); //see above line comment ^
                }
            }
            // If the property was to be deleted, the deletion becomes an update.
            if (this.deletedProperties.remove(propertyDefinition)) {
                PropertyBag.AddToChangeList(propertyDefinition, this.modifiedProperties);
            }
            else {
                // If the property value was not set, we have a newly set property.
                if (this.properties.getStringKeys().indexOf(propertyDefinition.Name) == -1 /*.ContainsKey(propertyDefinition)*/) {
                    PropertyBag.AddToChangeList(propertyDefinition, this.addedProperties);
                }
                else {
                    // The last case is that we have a modified property.
                    if (this.modifiedProperties.indexOf(propertyDefinition) == -1 /*.Contains(propertyDefinition)*/) {
                        PropertyBag.AddToChangeList(propertyDefinition, this.modifiedProperties);
                    }
                }
            }
            this.InitComplexProperty(value instanceof ComplexProperty_1.ComplexProperty ? value : undefined);
            this.properties.set(propertyDefinition, value);
            this.Changed();
        }
    };
    //ToJson(service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("PropertyBag.ts - ToJson : Not implemented."); }
    //ToJsonForCreate(service: ExchangeService, jsonObject: JsonObject): any { throw new Error("PropertyBag.ts - ToJsonForCreate : Not implemented."); }
    //ToJsonForUpdate(service: ExchangeService, jsonObject: JsonObject): any { throw new Error("PropertyBag.ts - ToJsonForUpdate : Not implemented."); }
    PropertyBag.prototype.TryGetProperty = function (propertyDefinition, propertyValue) {
        var serviceException = { outValue: null };
        propertyValue.outValue = this.GetPropertyValueOrException(propertyDefinition, serviceException);
        return serviceException.outValue == null;
    };
    PropertyBag.prototype.TryGetPropertyAs = function (propertyDefinition, propertyValue) {
        // Verify that the type parameter and property definition's type are compatible.
        //debug: //todo: fix isassignablefrom
        //if (!typeof (T).IsAssignableFrom(propertyDefinition.Type)) {
        //    string errorMessage = ExtensionMethods.stringFormatting.Format(
        //        Strings.PropertyDefinitionTypeMismatch,
        //        EwsUtilities.GetPrintableTypeName(propertyDefinition.Type),
        //        EwsUtilities.GetPrintableTypeName(typeof (T)));
        //    throw new ArgumentException(errorMessage, "propertyDefinition");
        //}
        var outValue = { outValue: null };
        var result = this.TryGetProperty(propertyDefinition, outValue);
        propertyValue.outValue = result ? outValue.outValue : undefined;
        return result;
    };
    PropertyBag.prototype.TryGetValue = function (propertyDefinition, propertyValue) { return this.properties.tryGetValue(propertyDefinition, propertyValue); };
    PropertyBag.prototype.Validate = function () {
        for (var _i = 0, _a = this.addedProperties; _i < _a.length; _i++) {
            var item = _a[_i];
            var propertyDefinition = item;
            this.ValidatePropertyValue(propertyDefinition);
        }
        for (var _b = 0, _c = this.modifiedProperties; _b < _c.length; _b++) {
            var item = _c[_b];
            var propertyDefinition = item;
            this.ValidatePropertyValue(propertyDefinition);
        }
    };
    PropertyBag.prototype.ValidatePropertyValue = function (propertyDefinition) {
        var propertyValue = { outValue: null };
        if (this.TryGetProperty(propertyDefinition, propertyValue)) {
            //todo: check for interface somehow;
            //ISelfValidate validatingValue = propertyValue as ISelfValidate;
            //if (validatingValue != null) {
            //    validatingValue.Validate();
            //}
            //todo: fix interface check based on solution above (when available), this is alternate check
            var validatingValue = propertyValue.outValue;
            if (validatingValue != null && validatingValue.Validate)
                validatingValue.Validate();
        }
    };
    //WriteDeleteUpdateToJson(jsonUpdates: System.Collections.Generic.List<T>, propertyDefinition: PropertyDefinition, propertyValue: any, service: ExchangeService): any { throw new Error("PropertyBag.ts - WriteDeleteUpdateToJson : Not implemented."); }
    PropertyBag.prototype.WriteDeleteUpdateToXml = function (writer, propertyDefinition, propertyValue) {
        // The following test should not be necessary since the property bag prevents
        // properties to be deleted (set to null) if they don't have the CanDelete flag,
        // but it doesn't hurt...
        if (propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete)) {
            var handled = false;
            //todo: check interface somehow
            //ICustomUpdateSerializer updateSerializer = propertyValue as ICustomUpdateSerializer;
            //if (updateSerializer != null) {
            //    handled = updateSerializer.WriteDeleteUpdateToXml(writer, this.Owner);
            //}
            //todo: fix interface check based on solution above (when available), this is alternate check
            var updateSerializer = propertyValue;
            if (propertyValue != null && propertyValue != undefined && propertyValue.WriteDeleteUpdateToXml)
                handled = updateSerializer.WriteDeleteUpdateToXml(writer, this.Owner);
            if (!handled) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.Owner.GetDeleteFieldXmlElementName());
                propertyDefinition.WriteToXml(writer);
                writer.WriteEndElement();
            }
        }
    };
    //WriteSetUpdateToJson(jsonUpdates: System.Collections.Generic.List<T>, propertyDefinition: PropertyDefinition, service: ExchangeService): any { throw new Error("PropertyBag.ts - WriteSetUpdateToJson : Not implemented."); }
    PropertyBag.prototype.WriteSetUpdateToXml = function (writer, propertyDefinition) {
        // The following test should not be necessary since the property bag prevents
        // properties to be updated if they don't have the CanUpdate flag, but it
        // doesn't hurt...
        if (propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate)) {
            var propertyValue = this._getItem(propertyDefinition);
            var handled = false;
            //todo: check interface somehow, using alternate method
            var updateSerializer = propertyValue;
            if (updateSerializer != null && updateSerializer.WriteSetUpdateToXml) {
                handled = updateSerializer.WriteSetUpdateToXml(writer, this.Owner, propertyDefinition);
            }
            if (!handled) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.Owner.GetSetFieldXmlElementName());
                propertyDefinition.WriteToXml(writer);
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.Owner.GetXmlElementName());
                propertyDefinition.WritePropertyValueToXml(writer, this, true /* isUpdateOperation */);
                writer.WriteEndElement();
                writer.WriteEndElement();
            }
        }
    };
    PropertyBag.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.Owner.GetXmlElementName());
        //debug: //todo: fix Schema objects IEnumerable.
        //
        for (var _i = 0, _a = this.Owner.Schema.GetEnumerator(); _i < _a.length; _i++) {
            var item = _a[_i];
            // The following test should not be necessary since the property bag prevents
            // properties to be set if they don't have the CanSet flag, but it doesn't hurt...
            var propertyDefinition = item;
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet, writer.Service.RequestedServerVersion)) {
                if (this.Contains(propertyDefinition)) {
                    propertyDefinition.WritePropertyValueToXml(writer, this, false /* isUpdateOperation */);
                }
            }
        }
        writer.WriteEndElement();
    };
    PropertyBag.prototype.WriteToXmlForUpdate = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.Owner.GetChangeXmlElementName());
        this.Owner.GetId().WriteToXml(writer);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Updates);
        for (var _i = 0, _a = this.addedProperties; _i < _a.length; _i++) {
            var item = _a[_i];
            var propertyDefinition = item;
            this.WriteSetUpdateToXml(writer, propertyDefinition);
        }
        for (var _b = 0, _c = this.modifiedProperties; _b < _c.length; _b++) {
            var item = _c[_b];
            var propertyDefinition = item;
            this.WriteSetUpdateToXml(writer, propertyDefinition);
        }
        for (var _d = 0, _e = this.deletedProperties.Items; _d < _e.length; _d++) {
            var kv = _e[_d];
            this.WriteDeleteUpdateToXml(writer, kv.key, kv.value);
        }
        writer.WriteEndElement();
        writer.WriteEndElement();
    };
    return PropertyBag;
}());
exports.PropertyBag = PropertyBag;
