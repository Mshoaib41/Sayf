import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

import LinearGradient from "react-native-linear-gradient";
import { ScaledSheet, verticalScale } from "react-native-size-matters";

import colors from "../util/colors";
const Button = ({
  label,
  onPress,
  buttonIcon,
  containerStyle,
  innerButtonStyle,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <LinearGradient
          start={{ x: -0.4, y: 0.1 }}
          end={{ x: 0.8, y: 0.1 }}
          colors={["#00984B", "#6BE7A7"]}
          style={styles.innerContainer}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.label}>{label}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = ScaledSheet.create({
  buttonContainer: {
    alignSelf: "center",
    width: "35%",
    shadowColor: colors.boxShadowColor,
    justifyContent: "center",
    marginTop: "40@s",
  },
  innerContainer: {
    borderRadius: "30@s",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingVertical: "10@s",
  },
  label: {
    fontSize: "13@vs",
    fontFamily: "PoppinsRegular",
    color: colors.backgroundColor,
    textAlignVertical: "center",
  },
});
