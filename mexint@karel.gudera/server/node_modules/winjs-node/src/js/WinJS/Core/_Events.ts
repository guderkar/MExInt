'use strict';
//import exports = require('exports');
import _Base = require('./_Base');


function createEventProperty(name) {
  var eventPropStateName = "_on" + name + "state";

  return {
    get: function() {
      var state = this[eventPropStateName];
      return state && state.userHandler;
    },
    set: function(handler) {
      var state = this[eventPropStateName];
      if (handler) {
        if (!state) {
          state = { wrapper: function(evt) { return state.userHandler(evt); }, userHandler: handler };
          Object.defineProperty(this, eventPropStateName, { value: state, enumerable: false, writable: true, configurable: true });
          this.addEventListener(name, state.wrapper, false);
        }
        state.userHandler = handler;
      } else if (state) {
        this.removeEventListener(name, state.wrapper, false);
        this[eventPropStateName] = null;
      }
    },
    enumerable: true
  };
}

function createEventProperties(...arg: any[]): any {
  /// <signature helpKeyword="WinJS.Utilities.createEventProperties">
  /// <summary locid="WinJS.Utilities.createEventProperties">
  /// Creates an object that has one property for each name passed to the function.
  /// </summary>
  /// <param name="events" locid="WinJS.Utilities.createEventProperties_p:events">
  /// A variable list of property names.
  /// </param>
  /// <returns type="Object" locid="WinJS.Utilities.createEventProperties_returnValue">
  /// The object with the specified properties. The names of the properties are prefixed with 'on'.
  /// </returns>
  /// </signature>
  var props = {};
  for (var i = 0, len = arguments.length; i < len; i++) {
    var name = arguments[i];
    props["on" + name] = createEventProperty(name);
  }
  return props;
}

class EventMixinEvent {
  static supportedForProcessing: boolean = false;
  
  _preventDefaultCalled: boolean = false;
  _stopImmediatePropagationCalled:boolean = false;
  detail: any = null;
  bubbles: any = { value: false, writable: false };
  cancelable: any = { value: false, writable: false };
  get currentTarget(): any { return this.target; }
  get defaultPrevented(): boolean { return this._preventDefaultCalled; }
  trusted: any = { value: false, writable: false };
  eventPhase: any = { value: 0, writable: false };
  target: any = null;
  timeStamp: any = null;
  type: any = null;

  constructor(type, detail, target) {
    this.detail = detail;
    this.target = target;
    this.timeStamp = Date.now();
    this.type = type;
  }


  preventDefault() {
    this._preventDefaultCalled = true;
  }
  stopImmediatePropagation() {
    this._stopImmediatePropagationCalled = true;
  }
  stopPropagation() {
  }
}

class EventListener {
  static supportedForProcessing: boolean = false;

  _listeners: any = null;

  addEventListener(type, listener, useCapture) {
    /// <signature helpKeyword="WinJS.Utilities.eventMixin.addEventListener">
    /// <summary locid="WinJS.Utilities.eventMixin.addEventListener">
    /// Adds an event listener to the control.
    /// </summary>
    /// <param name="type" locid="WinJS.Utilities.eventMixin.addEventListener_p:type">
    /// The type (name) of the event.
    /// </param>
    /// <param name="listener" locid="WinJS.Utilities.eventMixin.addEventListener_p:listener">
    /// The listener to invoke when the event is raised.
    /// </param>
    /// <param name="useCapture" locid="WinJS.Utilities.eventMixin.addEventListener_p:useCapture">
    /// if true initiates capture, otherwise false.
    /// </param>
    /// </signature>
    useCapture = useCapture || false;
    this._listeners = this._listeners || {};
    var eventListeners = (this._listeners[type] = this._listeners[type] || []);
    for (var i = 0, len = eventListeners.length; i < len; i++) {
      var l = eventListeners[i];
      if (l.useCapture === useCapture && l.listener === listener) {
        return;
      }
    }
    eventListeners.push({ listener: listener, useCapture: useCapture });
  }
  dispatchEvent(type, details) {
    /// <signature helpKeyword="WinJS.Utilities.eventMixin.dispatchEvent">
    /// <summary locid="WinJS.Utilities.eventMixin.dispatchEvent">
    /// Raises an event of the specified type and with the specified additional properties.
    /// </summary>
    /// <param name="type" locid="WinJS.Utilities.eventMixin.dispatchEvent_p:type">
    /// The type (name) of the event.
    /// </param>
    /// <param name="details" locid="WinJS.Utilities.eventMixin.dispatchEvent_p:details">
    /// The set of additional properties to be attached to the event object when the event is raised.
    /// </param>
    /// <returns type="Boolean" locid="WinJS.Utilities.eventMixin.dispatchEvent_returnValue">
    /// true if preventDefault was called on the event.
    /// </returns>
    /// </signature>
    var listeners = this._listeners && this._listeners[type];
    if (listeners) {
      var eventValue = new EventMixinEvent(type, details, this);
      // Need to copy the array to protect against people unregistering while we are dispatching
      listeners = listeners.slice(0, listeners.length);
      for (var i = 0, len = listeners.length; i < len && !eventValue._stopImmediatePropagationCalled; i++) {
        listeners[i].listener(eventValue);
      }
      return eventValue.defaultPrevented || false;
    }
    return false;
  }
  removeEventListener(type, listener?, useCapture?) {
    /// <signature helpKeyword="WinJS.Utilities.eventMixin.removeEventListener">
    /// <summary locid="WinJS.Utilities.eventMixin.removeEventListener">
    /// Removes an event listener from the control.
    /// </summary>
    /// <param name="type" locid="WinJS.Utilities.eventMixin.removeEventListener_p:type">
    /// The type (name) of the event.
    /// </param>
    /// <param name="listener" locid="WinJS.Utilities.eventMixin.removeEventListener_p:listener">
    /// The listener to remove.
    /// </param>
    /// <param name="useCapture" locid="WinJS.Utilities.eventMixin.removeEventListener_p:useCapture">
    /// Specifies whether to initiate capture.
    /// </param>
    /// </signature>
    useCapture = useCapture || false;
    var listeners = this._listeners && this._listeners[type];
    if (listeners) {
      for (var i = 0, len = listeners.length; i < len; i++) {
        var l = listeners[i];
        if (l.listener === listener && l.useCapture === useCapture) {
          listeners.splice(i, 1);
          if (listeners.length === 0) {
            delete this._listeners[type];
          }
          // Only want to remove one element for each call to removeEventListener
          break;
        }
      }
    }
  }
}

var _export = {
  _createEventProperty: createEventProperty,
  createEventProperties: createEventProperties,
  eventMixin: EventListener,
  EventListener:EventListener
};
//_Base.Namespace._moduleDefine(undefined, "WinJS.Utilities", _export);
export = _export;
