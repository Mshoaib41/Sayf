import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import CustomText from "./CustomText";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import Button from "./Button";
import colors from "../util/colors";
const AuthWrapper = (props) => {
  return (
    <View>
      {props.children}
      <View>
        <Button
          label={props.buttonLabel}
          onPress={props.buttonOnPress}
          loading={props.loading}
        />
        <View style={{ marginVertical: verticalScale(50) }}>
          <CustomText
            label={props.continueLable}
            alignSelf="center"
            color={colors.textColorGray}
            fontSize={12}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "35%",
          alignSelf: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../assets/images/Google.png")}
          style={styles.soicalIcon}
        />
        <Image
          source={require("../assets/images/Facebook.png")}
          style={styles.soicalIcon}
        />
      </View>
      <View style={{ height: "10%" }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <CustomText
          label={"Don’t have an account?"}
          color={colors.textColorGray}
          fontSize={12}
        />
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
          <CustomText
            label={props.signTitle}
            color={colors.parimay}
            fontSize={12}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthWrapper;

const styles = ScaledSheet.create({
  soicalIcon: {
    width: "30@vs",
    height: "30@vs",
    resizeMode: "contain",
  },
});
