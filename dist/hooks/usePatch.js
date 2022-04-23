"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _contexts = require("../contexts");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default() {
  var _useContext = (0, _react.useContext)(Patch),
      patchContext = _extends({}, _useContext); // TODO: Sanitize.


  return patchContext;
};

exports["default"] = _default;