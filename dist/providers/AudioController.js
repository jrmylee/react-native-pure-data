"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useDeepCompareEffect = _interopRequireDefault(require("use-deep-compare-effect"));

var _nonSecure = require("nanoid/non-secure");

var _hooks = require("../hooks");

var _contexts = require("../contexts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AudioController = function AudioController(_ref) {
  var active = _ref.active,
      sampleRate = _ref.sampleRate,
      numberOfChannels = _ref.numberOfChannels,
      inputEnabled = _ref.inputEnabled,
      mixingEnabled = _ref.mixingEnabled,
      extraProps = _objectWithoutProperties(_ref, ["active", "sampleRate", "numberOfChannels", "inputEnabled", "mixingEnabled"]);

  var _useState = (0, _react.useState)(_nonSecure.nanoid),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var _useState3 = (0, _react.useState)(new Date()),
      _useState4 = _slicedToArray(_useState3, 2),
      sync = _useState4[0],
      setSync = _useState4[1];

  var _usePureData = (0, _hooks.usePureData)(),
      registerAudioController = _usePureData.registerAudioController,
      unregisterAudioController = _usePureData.unregisterAudioController;

  var audioProps = Object.freeze({
    active: active,
    sampleRate: sampleRate,
    numberOfChannels: numberOfChannels,
    inputEnabled: inputEnabled,
    mixingEnabled: mixingEnabled
  });
  (0, _react.useEffect)(function () {
    return function () {
      return unregisterAudioController(id).then(function () {
        return setSync(new Date());
      });
    };
  }, [id, setSync]);
  (0, _useDeepCompareEffect["default"])(function () {
    var inputEnabled = audioProps.inputEnabled,
        mixingEnabled = audioProps.mixingEnabled;

    if (mixingEnabled !== false) {
      console.warn("Sorry, the mixingEnabled prop is not currently supported. Your supplied value will be ignored.");
    }

    registerAudioController(id, audioProps).then(function () {
      return setSync(new Date());
    });
    return undefined;
  }, [id, registerAudioController, setSync, audioProps]);
  return /*#__PURE__*/_react["default"].createElement(_contexts.AudioControllerContext.Provider, {
    value: _objectSpread(_objectSpread({}, audioProps), {}, {
      /* force disabled */
      mixingEnabled: false,

      /* context propagation */
      id: id,

      /* sync */
      sync: sync
    })
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, extraProps));
};

AudioController.propTypes = {
  active: _propTypes["default"].bool,
  sampleRate: _propTypes["default"].number,
  numberOfChannels: _propTypes["default"].number,
  inputEnabled: _propTypes["default"].bool,
  mixingEnabled: _propTypes["default"].bool
};
AudioController.defaultProps = _objectSpread({}, _contexts.AudioControllerContext.defaultContext);
var _default = AudioController;
exports["default"] = _default;