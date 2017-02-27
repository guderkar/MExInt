"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExtensionMethods_1 = require("../../ExtensionMethods");
var EwsLogging_1 = require("../EwsLogging");
var EwsServiceXmlReader_1 = require("../EwsServiceXmlReader");
var HangingRequestDisconnectEventArgs_1 = require("./HangingRequestDisconnectEventArgs");
var HangingRequestDisconnectReason_1 = require("../../Enumerations/HangingRequestDisconnectReason");
var PromiseFactory_1 = require("../../PromiseFactory");
var fetch_1 = require("fetch");
var ServiceRequestBase_1 = require("./ServiceRequestBase");
/**
 * @internal Represents an abstract, hanging service request.
 */
var HangingServiceRequestBase = (function (_super) {
    __extends(HangingServiceRequestBase, _super);
    /**
     * @internal Initializes a new instance of the **HangingServiceRequestBase** class.
     *
     * @param   {ExchangeService}   	service                	The service.
     * @param   {HandleResponseObject} 	handler   				Callback delegate to handle response objects.
     * @param   {number}   				heartbeatFrequency      Frequency at which we expect heartbeats, in milliseconds.
     */
    function HangingServiceRequestBase(service, handler, heartbeatFrequency) {
        _super.call(this, service);
        this.responseHandler = null;
        this.response = null;
        this.request = null;
        this.heartbeatFrequencyMilliseconds = 0;
        /**
         * @internal Occurs when the hanging request is disconnected. events converted into array of delagte function
         */
        this.OnDisconnect = [];
        this.IsConnected = false;
        /**
         * Stores chunked data from fetch FetchStream
         */
        this.chunk = '';
        this.responseHandler = handler;
        this.heartbeatFrequencyMilliseconds = heartbeatFrequency;
    }
    HangingServiceRequestBase.prototype.Disconnect = function (reason, exception) {
        if (reason === void 0) { reason = HangingRequestDisconnectReason_1.HangingRequestDisconnectReason.UserInitiated; }
        if (exception === void 0) { exception = null; }
        if (this.IsConnected) {
            this.stream.destroy();
            this.InternalOnDisconnect(reason, exception);
        }
    };
    /**
     * @internal Exectures the request.
     */
    HangingServiceRequestBase.prototype.InternalExecute = function () {
        //lock (this.lockObject){
        //this.response = this.ValidateAndEmitRequest(this.BuildXHR());
        var _this = this;
        return PromiseFactory_1.PromiseFactory.create(function (successDelegate, errorDelegate, progressDelegate) {
            var request = _this.BuildXHR();
            request["payload"] = request.data;
            delete request["data"];
            request["method"] = request.type;
            delete request["type"];
            //this.ReadResponsePrivate(response);
            _this.ValidateAndEmitRequest(request).then(function (xhrResponse) {
                //console.log(xhrResponse);
            }, function (resperr) {
                EwsLogging_1.EwsLogging.Log("Error in calling service, error code:" + resperr.status + "\r\n" + resperr.getAllResponseHeaders());
                if (errorDelegate)
                    errorDelegate(_this.ProcessWebException(resperr) || resperr);
            }, function (progress) {
                _this.InternalOnConnect();
                progress = progress.trim();
                _this.chunk += progress;
                var _continue = false;
                var xml = '';
                if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(_this.chunk)) {
                    //"<Envelope>indexOf</Envelope>"
                    var start = _this.chunk.indexOf("<Envelope");
                    var end = _this.chunk.indexOf("</Envelope>");
                    if (start >= 0 && end > 0) {
                        xml = _this.chunk.substr(start, end - start + 11);
                        _this.chunk = _this.chunk.substr(end + 11);
                        _continue = true;
                    }
                }
                if (_continue) {
                    var dom = new ExtensionMethods_1.DOMParser();
                    var xml2js = new ExtensionMethods_1.xml2JsObject();
                    var req = void 0;
                    try {
                        //req = xml2js.parseXMLNode(dom.parseFromString(xml, "text/xml").documentElement, true);
                        //EwsLogging.DebugLog(req, true);
                        EwsLogging_1.EwsLogging.DebugLog(xml, true);
                        var ewsXmlReader = new EwsServiceXmlReader_1.EwsServiceXmlReader(xml, _this.Service);
                        EwsLogging_1.EwsLogging.DebugLog(ewsXmlReader.JsObject, true);
                        //var serviceResponse = 
                        _this.ParseResponses(ewsXmlReader.JsObject);
                    }
                    catch (error) {
                        if (errorDelegate)
                            errorDelegate(error);
                    }
                }
            });
        });
    };
    /**
     * Perform any bookkeeping needed when we connect
     */
    HangingServiceRequestBase.prototype.InternalOnConnect = function () {
        if (!this.IsConnected) {
            this.IsConnected = true;
        }
    };
    /**
     * Perform any bookkeeping needed when we disconnect (cleanly or forcefully)
     *
     * @param   {HangingRequestDisconnectReason}    reason      [description]
     * @param   {Exception}                         exception   [description]
     */
    HangingServiceRequestBase.prototype.InternalOnDisconnect = function (reason, exception) {
        var _this = this;
        if (this.IsConnected) {
            this.IsConnected = false;
            if (this.OnDisconnect && ExtensionMethods_1.ArrayHelper.isArray(this.OnDisconnect)) {
                try {
                    this.OnDisconnect.forEach(function (OnDisconnect) {
                        OnDisconnect(_this, new HangingRequestDisconnectEventArgs_1.HangingRequestDisconnectEventArgs(reason, exception));
                    });
                }
                catch (e) { }
            }
        }
    };
    //* @return  {any}   parsed response object.
    /**
     * Parses the responses.
     *
     * @param   {any}   state   Notification state.
     */
    HangingServiceRequestBase.prototype.ParseResponses = function (state) {
        try {
            var responseObject = this.ReadResponseXmlJsObject(state);
            this.responseHandler(responseObject);
        }
        catch (error) {
            this.Disconnect(HangingRequestDisconnectReason_1.HangingRequestDisconnectReason.Exception, error);
            console.log("error parsing object....\n TODO: Implement better parse error for Notifications");
        }
        // try
        //     {
        //         Guid traceId = Guid.Empty;
        //         HangingTraceStream tracingStream = null;
        //         MemoryStream responseCopy = null;
        //         try
        //         {
        //             bool traceEwsResponse = this.Service.IsTraceEnabledFor(TraceFlags.EwsResponse);
        //             using (Stream responseStream = this.response.GetResponseStream())
        //             {
        //                 responseStream.ReadTimeout = 2 * this.heartbeatFrequencyMilliseconds;
        //                 tracingStream = new HangingTraceStream(responseStream, this.Service);
        //                 // EwsServiceMultiResponseXmlReader.Create causes a read.
        //                 if (traceEwsResponse)
        //                 {
        //                     responseCopy = new MemoryStream();
        //                     tracingStream.SetResponseCopy(responseCopy);
        //                 }
        //                 EwsServiceMultiResponseXmlReader ewsXmlReader = EwsServiceMultiResponseXmlReader.Create(tracingStream, this.Service);
        //                 while (this.IsConnected)
        //                 {
        //                     object responseObject = null;
        //                     if (traceEwsResponse)
        //                     {
        //                         try
        //                         {
        //                             responseObject = this.ReadResponse(ewsXmlReader, this.response.Headers);
        //                         }
        //                         finally
        //                         {
        //                             this.Service.TraceXml(TraceFlags.EwsResponse, responseCopy);
        //                         }
        //                         // reset the stream collector.
        //                         responseCopy.Close();
        //                         responseCopy = new MemoryStream();
        //                         tracingStream.SetResponseCopy(responseCopy);
        //                     }
        //                     else
        //                     {
        //                         responseObject = this.ReadResponse(ewsXmlReader, this.response.Headers);
        //                     }
        //                     this.responseHandler(responseObject);
        //                 }
        //             }
        //         }
        //         catch (TimeoutException ex)
        //         {
        //             // The connection timed out.
        //             this.Disconnect(HangingRequestDisconnectReason.Timeout, ex);
        //             return;
        //         }
        //         catch (IOException ex)
        //         {
        //             // Stream is closed, so disconnect.
        //             this.Disconnect(HangingRequestDisconnectReason.Exception, ex);
        //             return;
        //         }
        //         catch (HttpException ex)
        //         {
        //             // Stream is closed, so disconnect.
        //             this.Disconnect(HangingRequestDisconnectReason.Exception, ex);
        //             return;
        //         }
        //         catch (WebException ex)
        //         {
        //             // Stream is closed, so disconnect.
        //             this.Disconnect(HangingRequestDisconnectReason.Exception, ex);
        //             return;
        //         }
        //         catch (ObjectDisposedException ex)
        //         {
        //             // Stream is closed, so disconnect.
        //             this.Disconnect(HangingRequestDisconnectReason.Exception, ex);
        //             return;
        //         }
        //         catch (NotSupportedException)
        //         {
        //             // This is thrown if we close the stream during a read operation due to a user method call.
        //             // Trying to delay closing until the read finishes simply results in a long-running connection.
        //             this.Disconnect(HangingRequestDisconnectReason.UserInitiated, null);
        //             return;
        //         }
        //         catch (XmlException ex)
        //         {
        //             // Thrown if server returned no XML document.
        //             this.Disconnect(HangingRequestDisconnectReason.UserInitiated, ex);
        //             return;
        //         }
        //         finally
        //         {
        //             if (responseCopy != null)
        //             {
        //                 responseCopy.Dispose();
        //                 responseCopy = null;
        //             }
        //         }
        //     }
        //     catch (ServiceLocalException exception)
        //     {
        //         this.Disconnect(HangingRequestDisconnectReason.Exception, exception);
        //     }
    };
    //ReadPreamble(ewsXmlReader: EwsServiceXmlReader): void { throw new Error("HangingServiceRequestBase.ts - ReadPreamble : Not implemented."); }
    /* ews-javascript-api specific */
    /**
     * Validates request parameters, and emits the request to the server.
     *
     * @param   {IXHROptions}               request   The request.
     * @return  {IPromise<XMLHttpRequest>}  The response returned by the server.
     */
    HangingServiceRequestBase.prototype.ValidateAndEmitRequest = function (request) {
        var _this = this;
        this.Validate();
        //var request = this.BuildXHR();
        if (this.Service.SendClientLatencies) {
            var clientStatisticsToAdd = '';
            //lock(clientStatisticsCache)
            //{
            if (ServiceRequestBase_1.ServiceRequestBase.clientStatisticsCache.length > 0) {
                clientStatisticsToAdd = ServiceRequestBase_1.ServiceRequestBase.clientStatisticsCache[0];
                ServiceRequestBase_1.ServiceRequestBase.clientStatisticsCache.splice(0, 1);
            }
            //}
            if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(clientStatisticsToAdd)) {
                if (request.headers[ServiceRequestBase_1.ServiceRequestBase.ClientStatisticsRequestHeader]) {
                    request.headers[ServiceRequestBase_1.ServiceRequestBase.ClientStatisticsRequestHeader] =
                        request.headers[ServiceRequestBase_1.ServiceRequestBase.ClientStatisticsRequestHeader] + clientStatisticsToAdd;
                }
                else {
                    request.headers[ServiceRequestBase_1.ServiceRequestBase.ClientStatisticsRequestHeader] = clientStatisticsToAdd;
                }
            }
        }
        //var startTime = Date.now();// DateTime.UtcNow;
        //var response = XHR(request);
        EwsLogging_1.EwsLogging.DebugLog("sending ews request");
        EwsLogging_1.EwsLogging.DebugLog(request, true);
        return PromiseFactory_1.PromiseFactory.create(function (successDelegate, errorDelegate, progressDelegate) {
            _this.stream = new fetch_1.FetchStream(_this.Service.Url.ToString(), request);
            _this.stream.on("data", function (chunk) {
                //console.log(chunk.toString());
                progressDelegate(chunk.toString());
            });
            _this.stream.on("meta", function (meta) {
                if (_this.OnResponseHeader && typeof _this.OnResponseHeader === 'function') {
                    _this.OnResponseHeader(meta["responseHeaders"]);
                }
                //console.log(meta);
            });
            _this.stream.on("end", function (data) {
                _this.IsConnected = false;
            });
            _this.stream.on('error', function (error) {
                _this.Disconnect(HangingRequestDisconnectReason_1.HangingRequestDisconnectReason.Exception, error);
                if (errorDelegate) {
                    errorDelegate(error);
                }
            });
        });
        //try
        //{
        //    var response = this.GetEwsHttpWebResponse(request);
        //}
        //finally {
        //    if (this.service.SendClientLatencies) {
        //        int clientSideLatency = (int)(DateTime.UtcNow - startTime).TotalMilliseconds;
        //        string requestId = string.Empty;
        //        string soapAction = this.GetType().Name.Replace("Request", string.Empty);
        //        if (response != null && response.Headers != null) {
        //            foreach(string requestIdHeader in ServiceRequestBase.RequestIdResponseHeaders)
        //            {
        //                string requestIdValue = response.Headers.Get(requestIdHeader);
        //                if (!string.IsNullOrEmpty(requestIdValue)) {
        //                    requestId = requestIdValue;
        //                    break;
        //                }
        //            }
        //        }
        //        StringBuilder sb = new StringBuilder();
        //        sb.Append("MessageId=");
        //        sb.Append(requestId);
        //        sb.Append(",ResponseTime=");
        //        sb.Append(clientSideLatency);
        //        sb.Append(",SoapAction=");
        //        sb.Append(soapAction);
        //        sb.Append(";");
        //        lock(clientStatisticsCache)
        //        {
        //            clientStatisticsCache.Add(sb.ToString());
        //        }
        //    }
        //}
        //return response;
    };
    HangingServiceRequestBase.BufferSize = 4096;
    return HangingServiceRequestBase;
}(ServiceRequestBase_1.ServiceRequestBase));
exports.HangingServiceRequestBase = HangingServiceRequestBase;
