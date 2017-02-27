"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TraceFlags_1 = require("../../Enumerations/TraceFlags");
var RenderingMode_1 = require("../../Enumerations/RenderingMode");
var ServiceRequestException_1 = require("../../Exceptions/ServiceRequestException");
var Strings_1 = require("../../Strings");
var EwsServiceXmlReader_1 = require("../EwsServiceXmlReader");
var PromiseFactory_1 = require("../../PromiseFactory");
var EwsLogging_1 = require("../EwsLogging");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var ServiceRequestBase_1 = require("./ServiceRequestBase");
/** @internal */
var SimpleServiceRequestBase = (function (_super) {
    __extends(SimpleServiceRequestBase, _super);
    function SimpleServiceRequestBase() {
        _super.apply(this, arguments);
    }
    //BeginExecute(callback: System.AsyncCallback, state: any): any/*System.IAsyncResult*/ { throw new Error("SimpleServiceRequestBase.ts - BeginExecute : Not implemented.");}
    //EndInternalExecute(asyncResult: any/*System.IAsyncResult*/): any { throw new Error("SimpleServiceRequestBase.ts - EndInternalExecute : Not implemented.");}
    SimpleServiceRequestBase.prototype.InternalExecute = function () {
        //var writer = new Data.EwsServiceXmlWriter();
        //this.WriteSoapRequest(this.url, writer);
        var _this = this;
        //if (!this.Service && !this.Service.Credentials && (!this.Service.Credentials.UserName || this.service.Credentials.Password))
        //    throw new Error("missing credential");
        //var cred = "Basic " + btoa(this.Service.Credentials.UserName + ":" + this.Service.Credentials.Password);
        //var cc = writer.GetXML();
        //var xhrOptions: IXHROptions = {
        //    type: "POST",
        //    data: cc,
        //    url: "https://pod51045.outlook.com/autodiscover/autodiscover.svc",
        //    headers: { "Content-Type": "text/xml", "Authorization": cred },
        //    //customRequestInitializer: function (x) {
        //    //    var m = x;
        //    //}
        //};
        return PromiseFactory_1.PromiseFactory.create(function (successDelegate, errorDelegate, progressDelegate) {
            var request = _this.BuildXHR();
            //this.ReadResponsePrivate(response);
            _this.ValidateAndEmitRequest(request).then(function (xhrResponse) {
                var dom = new ExtensionMethods_1.DOMParser();
                var xml2js = new ExtensionMethods_1.xml2JsObject();
                var req = xml2js.parseXMLNode(dom.parseFromString(request.data, "text/xml").documentElement, true);
                EwsLogging_1.EwsLogging.DebugLog(req, true);
                if (xhrResponse.status == 200) {
                    EwsLogging_1.EwsLogging.DebugLog(xhrResponse, true);
                    var ewsXmlReader = new EwsServiceXmlReader_1.EwsServiceXmlReader(xhrResponse.responseText || xhrResponse.response, _this.Service);
                    //EwsLogging.DebugLog(ewsXmlReader.JsObject, true);
                    var serviceResponse = _this.ReadResponsePrivate(ewsXmlReader.JsObject);
                    if (successDelegate)
                        successDelegate(serviceResponse || xhrResponse.responseText || xhrResponse.response);
                }
                else {
                    if (errorDelegate)
                        errorDelegate(_this.ProcessWebException(serviceResponse || xhrResponse.responseText || xhrResponse.response) || serviceResponse);
                }
            }, function (resperr) {
                EwsLogging_1.EwsLogging.Log("Error in calling service, error code:" + resperr.status + "\r\n" + resperr.getAllResponseHeaders());
                if (errorDelegate)
                    errorDelegate(_this.ProcessWebException(resperr) || resperr);
            });
        });
    };
    SimpleServiceRequestBase.prototype.ReadResponsePrivate = function (response /*IEwsHttpWebResponse*/) {
        var serviceResponse;
        try {
            this.Service.ProcessHttpResponseHeaders(TraceFlags_1.TraceFlags.EwsResponseHttpHeaders, response);
            // If tracing is enabled, we read the entire response into a MemoryStream so that we
            // can pass it along to the ITraceListener. Then we parse the response from the
            // MemoryStream.
            if (this.Service.IsTraceEnabledFor(TraceFlags_1.TraceFlags.EwsResponse)) {
            }
            else {
                if (this.Service.RenderingMethod == RenderingMode_1.RenderingMode.Xml) {
                    serviceResponse = this.ReadResponseXmlJsObject(response);
                }
                else if (this.Service.RenderingMethod == RenderingMode_1.RenderingMode.JSON) {
                    serviceResponse = this.ReadResponseJson(response);
                }
                else {
                    throw new Error /*InvalidOperationException*/("Unknown RenderingMethod.");
                }
            }
        }
        catch (ex) {
            if (ex.Response != null) {
                //IEwsHttpWebResponse exceptionResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(e);
                this.Service.ProcessHttpResponseHeaders(TraceFlags_1.TraceFlags.EwsResponseHttpHeaders, response);
            }
            throw new ServiceRequestException_1.ServiceRequestException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ServiceRequestFailed, ex.Message), ex);
        }
        return serviceResponse;
    };
    SimpleServiceRequestBase.prototype.ReadResponseJson = function (jsObject /*System.IO.Stream*/) {
        //var jsonResponse: JsonObject = new JsonParser(responseStream).Parse();
        return _super.prototype.BuildResponseObjectFromJson.call(this, jsObject);
    };
    SimpleServiceRequestBase.prototype.WebRequestAsyncCallback = function (webAsyncResult /*System.IAsyncResult*/) { throw new Error("SimpleServiceRequestBase.ts - WebRequestAsyncCallback : Not implemented."); };
    return SimpleServiceRequestBase;
}(ServiceRequestBase_1.ServiceRequestBase));
exports.SimpleServiceRequestBase = SimpleServiceRequestBase;
