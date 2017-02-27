'use strict';
import _Global = require('./_Global');

var hasWinRT = !!_Global.Windows;

function markSupportedForProcessing(func) {
  /// <signature helpKeyword="WinJS.Utilities.markSupportedForProcessing">
  /// <summary locid="WinJS.Utilities.markSupportedForProcessing">
  /// Marks a function as being compatible with declarative processing, such as WinJS.UI.processAll
  /// or WinJS.Binding.processAll.
  /// </summary>
  /// <param name="func" type="Function" locid="WinJS.Utilities.markSupportedForProcessing_p:func">
  /// The function to be marked as compatible with declarative processing.
  /// </param>
  /// <returns type="Function" locid="WinJS.Utilities.markSupportedForProcessing_returnValue">
  /// The input function.
  /// </returns>
  /// </signature>
  func.supportedForProcessing = true;
  return func;
}

var _export = {
  hasWinRT: hasWinRT,
  markSupportedForProcessing: markSupportedForProcessing,
  _setImmediate: _Global.setImmediate ? _Global.setImmediate.bind(_Global) : function(handler) {
    _Global.setTimeout(handler, 0);
  }
};
export = _export;
