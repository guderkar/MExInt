// Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information.
//(function (global) {
//    "use strict";
//
//    define(global);
//}(this));

interface Global {
  document?: HTMLDocument;
  parent?: Window;
  screen?: Screen;
  top?: Window;
  Math?: Math;
  window?: Window;
  Windows?: any;

  addEventListener?(type: string, handler: EventListener, useCapture?: boolean): void;
  getComputedStyle?(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
  setTimeout?(expression: any, msec?: number, language?: any): number;

  setImmediate?: () => any;
  msWriteProfilerMark?: (profilemark?:string) => any;
  msGetWeakWinRTProperty?:any;
  msSetWeakWinRTProperty?:any;
  Debug?:any;
  navigator?:any;
  clearTimeout?:any;
  MSApp?:any;
  performance?:any;
  location?:any;
  console?:any;
  formatLog?:any;
  log?:any;
  HTMLIFrameElement?:any;
  frames?:any;
  requestAnimationFrame?:any;
  cancelAnimationFrame?:any;
}

'use strict'
declare var global;
declare var window;
var window = window || undefined;
var _global: Global = window|| global;
//console.log(_global);

export = _global;
