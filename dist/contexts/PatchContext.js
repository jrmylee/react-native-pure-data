"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultContext = Object.freeze({});

var PatchContext = /*#__PURE__*/_react["default"].createContext(defaultContext);

PatchContext.defaultContext = defaultContext;
var _default = PatchContext;
exports["default"] = _default;