"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _axios = _interopRequireDefault(require("axios"));

var _resolveAssetSource = _interopRequireDefault(require("react-native/Libraries/Image/resolveAssetSource"));

var _reactNativeFs = _interopRequireDefault(require("react-native-fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// TODO: remove and delegate
var RNPureData = _reactNative.NativeModules.PureData;
var registerAudioController = RNPureData.registerAudioController,
    nativeUnregisterAudioController = RNPureData.unregisterAudioController,
    nativeRegisterPatch = RNPureData.registerPatch,
    nativeUnregisterPatch = RNPureData.unregisterPatch,
    registerReceivers = RNPureData.registerReceivers;

var registerPatch = function registerPatch(audioControllerId, patchId, source) {
  console.log(source);

  if (typeof source === "string") {
    _reactNativeFs["default"].readFile(source) // 'base64' for binary 
    .then(function (patch) {
      console.log("filepath");
      console.log(patch);
      nativeRegisterPatch(audioControllerId, patchId, patch);
    })["catch"](console.error);
  } else {
    Promise.resolve() // TODO: We need to extend this functionality to compiled asset resolution.
    //       This is only yet compatible for network-defined assets, like those
    //       provided by metro.
    .then(function () {
      var url = source.uri;
      return (0, _axios["default"])({
        url: url,
        method: "get"
      });
    }).then(function (_ref) {
      var data = _ref.data;
      nativeRegisterPatch(audioControllerId, patchId, data);
    });
  }
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