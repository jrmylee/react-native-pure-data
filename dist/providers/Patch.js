"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useDeepCompareEffect = _interopRequireDefault(require("use-deep-compare-effect"));

var _typeCheck = require("type-check");

var _nonSecure = require("nanoid/non-secure");

var _resolveAssetSource = _interopRequireDefault(require("react-native/Libraries/Image/resolveAssetSource"));

var _contexts = require("../contexts");

var _hooks = require("../hooks");

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

var Patch = function Patch(_ref) {
  var source = _ref.source,
      children = _ref.children,
      extraProps = _objectWithoutProperties(_ref, ["source", "children"]);

  var _useState = (0, _react.useState)(_nonSecure.nanoid),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var _useState3 = (0, _react.useState)([{}]),
      _useState4 = _slicedToArray(_useState3, 1),
      buf = _useState4[0];

  var _useState5 = (0, _react.useState)(new Date()),
      _useState6 = _slicedToArray(_useState5, 2),
      sync = _useState6[0],
      setSync = _useState6[1];

  var _useAudioController = (0, _hooks.useAudioController)(),
      audioControllerId = _useAudioController.id,
      controllerIsActive = _useAudioController.active,
      controllerSync = _useAudioController.sync;

  var _usePureData = (0, _hooks.usePureData)(),
      registerPatch = _usePureData.registerPatch,
      unregisterPatch = _usePureData.unregisterPatch,
      registerReceivers = _usePureData.registerReceivers;

  var resolvedAssetSource = !!source && typeof source != "string" ? (0, _resolveAssetSource["default"])(source) : null;
  (0, _react.useEffect)(function () {
    return function () {
      return unregisterPatch(audioControllerId, id);
    };
  }, [audioControllerId, id, setSync]); // TODO: use the actual contents for the deep comparison thing...

  (0, _useDeepCompareEffect["default"])(function () {
    registerPatch(audioControllerId, id, resolvedAssetSource || source).then(function () {
      return setSync(new Date());
    });
    return undefined;
  }, [audioControllerId, id, resolvedAssetSource, source, unregisterPatch, registerPatch]);
  (0, _useDeepCompareEffect["default"])(function () {
    if (controllerIsActive) {
      // TODO: For maintainability, it would make sense to modulate the props
      //       first and then performing sanitization logic.
      var receivers = Object.entries(extraProps);
      var validReceivers = receivers.filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            _ = _ref3[0],
            v = _ref3[1];

        return (0, _typeCheck.typeCheck)("Number", v);
      })
      /* trigger messages for only the props that have changed */
      .filter(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            k = _ref5[0],
            v = _ref5[1];

        return buf[0][k] !== v;
      });
      var invalidReceivers = receivers.filter(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            _ = _ref7[0],
            v = _ref7[1];

        return !(0, _typeCheck.typeCheck)("Number", v);
      });
      /* reassign */

      buf[0] = extraProps;

      if (invalidReceivers.length > 0) {
        console.warn("Patch receiver props must be a Number. Non-numeric definitions will be ignored.");
      }

      if (validReceivers.length > 0) {
        registerReceivers(audioControllerId, id, Object.fromEntries(validReceivers));
      }
    }

    return undefined;
  }, [controllerIsActive, audioControllerId, id, extraProps, registerReceivers, controllerSync, sync]);
  return /*#__PURE__*/_react["default"].createElement(_contexts.PatchContext.Provider, {
    value: _objectSpread(_objectSpread({}, {}), {}, {
      /* context propagation */
      id: id,

      /* sync */
      sync: sync
    }),
    children: children
  });
};

Patch.propTypes = {
  source: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].shape({
    uri: _propTypes["default"].string.isRequired
  })]).isRequired
};
Patch.defaultProps = {
  source: null
};
var _default = Patch;
exports["default"] = _default;