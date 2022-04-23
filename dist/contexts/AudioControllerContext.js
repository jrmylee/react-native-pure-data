"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultContext = Object.freeze({
  active: false,
  sampleRate: 44100,
  numberOfChannels: 2,
  inputEnabled: false,
  mixingEnabled: false
});

var AudioControllerContext = /*#__PURE__*/_react["default"].createContext(defaultContext);

AudioControllerContext.defaultContext = defaultContext;
var _default = AudioControllerContext;
exports["default"] = _default;