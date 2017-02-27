// Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information.
//define({});

interface WinJS{
  Namespace?:WinJSNamespace;
  Class?:WinJSClass;
}

interface WinJSNamespace{
  define(name?: string, members?: any): any;
  defineWithParent(parentNamespace?: any, name?: string, members?: any): any;
  _moduleDefine(exports, name, members):any;
}

interface WinJSClass{
  define(constructor?: Function, instanceMembers?: any, staticMembers?: any): any;
  derive(baseClass: any, constructor: Function, instanceMembers?: any, staticMembers?: any): any;
  mix(constructor: Function, ...mixin: any[]): any;
}


var _:WinJS = {};
export = _;
