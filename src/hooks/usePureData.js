import React from "react";
import { NativeModules } from "react-native";
import axios from "axios";
// TODO: remove and delegate
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const { PureData: RNPureData } = NativeModules;

const {
  registerAudioController,
  unregisterAudioController: nativeUnregisterAudioController,
  registerPatch: nativeRegisterPatch,
  unregisterPatch: nativeUnregisterPatch,
  registerReceivers,
} = RNPureData;

const registerPatch = (audioControllerId, patchId, source) => {
  return new Promise((resolve, reject) => {
    if(typeof source === "string"){
      nativeRegisterPatch(audioControllerId, patchId, source);
      resolve();
    }else{
      const { uri: url } = source;
      axios({ url, method: "get" }).then(({ data }) => {
        nativeRegisterPatch(audioControllerId, patchId, data);
        resolve();
      });
    }
  })
}

const unregisterAudioController = (audioControllerId) =>
  Promise.resolve().then(() =>
    nativeUnregisterAudioController(audioControllerId)
  );

const unregisterPatch = (audioControllerId, patchId) =>
  Promise.resolve().then(() =>
    nativeUnregisterPatch(audioControllerId, patchId)
  );

const PureData = Object.freeze({
  registerAudioController,
  unregisterAudioController,
  registerPatch,
  unregisterPatch,
  registerReceivers,
});

export default () => PureData;
