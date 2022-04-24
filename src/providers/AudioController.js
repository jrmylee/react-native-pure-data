import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useDeepCompareEffect from "use-deep-compare-effect";
import { nanoid } from "nanoid/non-secure";

import { usePureData } from "../hooks";
import { AudioControllerContext } from "../contexts";

const AudioController = ({
  active,
  sampleRate,
  numberOfChannels,
  inputEnabled,
  mixingEnabled,
  ...extraProps
}) => {
  const [id] = useState(nanoid);
  const [sync, setSync] = useState(new Date());
  const { registerAudioController, unregisterAudioController } = usePureData();

  const audioProps = Object.freeze({
    active,
    sampleRate,
    numberOfChannels,
    inputEnabled,
    mixingEnabled,
  });

  useEffect(() => {
    return () => unregisterAudioController(id).then(() => setSync(new Date()));
  }, [id, setSync]);

  useDeepCompareEffect(() => {
    const { inputEnabled, mixingEnabled } = audioProps;
    if (mixingEnabled !== false) {
      console.warn(
        `Sorry, the mixingEnabled prop is not currently supported. Your supplied value will be ignored.`
      );
    }
    registerAudioController(id, audioProps).then(() => setSync(new Date()));
    return undefined;
  }, [id, registerAudioController, setSync, audioProps]);

  return (
    <AudioControllerContext.Provider
      value={{
        ...audioProps,
        /* force disabled */
        mixingEnabled: false,
        /* context propagation */
        id,
        /* sync */
        sync,
      }}
    >
      <React.Fragment {...extraProps} />
    </AudioControllerContext.Provider>
  );
};

AudioController.propTypes = {
  active: PropTypes.bool,
  sampleRate: PropTypes.number,
  numberOfChannels: PropTypes.number,
  inputEnabled: PropTypes.bool,
  mixingEnabled: PropTypes.bool,
};

AudioController.defaultProps = {
  ...AudioControllerContext.defaultContext,
};

export default AudioController;
