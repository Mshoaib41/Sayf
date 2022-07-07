import { Image } from "react-native";
import React from "react";
import { verticalScale } from "react-native-size-matters";
const Icon = ({ source, width, height }) => {
  return (
    <Image
      source={source}
      resizeMode={"contain"}
      style={{
        width: width || verticalScale(30),
        height: height || 48,
      }}
    />
  );
};

export default Icon;
