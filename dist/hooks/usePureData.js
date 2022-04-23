"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _axios = _interopRequireDefault(require("axios"));

var _resolveAssetSource = _interopRequireDefault(require("react-native/Libraries/Image/resolveAssetSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var RNPureData = _reactNative.NativeModules.PureData;
var registerAudioController = RNPureData.registerAudioController,
    nativeUnregisterAudioController = RNPureData.unregisterAudioController,
    nativeRegisterPatch = RNPureData.registerPatch,
    nativeUnregisterPatch = RNPureData.unregisterPatch,
    registerReceivers = RNPureData.registerReceivers;

var registerPatch = function registerPatch(audioControllerId, patchId, source) {
  return new Promise(function (resolve, reject) {
    console.log(source);
    console.log(_typeof(source));

    if (typeof source === "string") {
      nativeRegisterPatch(audioControllerId, patchId, source);
      resolve();
    } else {
      var url = source.uri;
      (0, _axios["default"])({
        url: url,
        method: "get"
      }).then(function (_ref) {
        var data = _ref.data;
        console.log(data);
        nativeRegisterPatch(audioControllerId, patchId, data);
        resolve();
      });
    }
  });
};

var unregisterAudioController = function unregisterAudioController(audioControllerId) {
  return Promise.resolve().then(function () {
    return nativeUnregisterAudioController(audioControllerId);
  });
};

var unregisterPatch = function unregisterPatch(audioControllerId, patchId) {
  return Promise.resolve().then(function () {
    return nativeUnregisterPatch(audioControllerId, patchId);
  });
};

var PureData = Object.freeze({
  registerAudioController: registerAudioController,
  unregisterAudioController: unregisterAudioController,
  registerPatch: registerPatch,
  unregisterPatch: unregisterPatch,
  registerReceivers: registerReceivers
});

var _default = function _default() {
  return PureData;
};

exports["default"] = _default;