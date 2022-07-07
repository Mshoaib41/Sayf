import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonStyle from "../../../../util/CommonStyle";
import { ScaledSheet } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { verticalScale } from "react-native-size-matters";

import { CheckBox } from "react-native-elements";
import colors from "../../../../util/colors";
import Button from "../../../../components/Button";
import OTPTextInput from "react-native-otp-textinput";
const OTP = () => {
  const [isChecked, setChecked] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <Image
        source={require("../../../../assets/images/Image6.png")}
        style={styles.loginImage}
      />
      <View style={{ width: "80%", alignSelf: "center" }}>
        <CustomText
          label="Please Confirm OTP"
          fontSize={19}
          fontFamily="PoppinsSemiBold"
        />
        <CustomText
          label="We have sent verification code on your Phone Number: +01234567891011"
          fontSize={11}
          color={colors.placeholderColor}
          marginTop={5}
        />
      </View>
      <View
        style={{
          width: "70%",
          alignSelf: "center",
          marginVertical: verticalScale(30),
        }}
      >
        <OTPTextInput
          inputCount={4}
          tintColor={colors.borderColor}
          offTintColor={colors.borderColor}
          textInputStyle={{
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderTopWidth: 3,
            borderRadius: 10,
            height: verticalScale(40),
            width: verticalScale(40),
          }}
          handleTextChange={(code) => setOtpCode(code)}
        />
      </View>
      <View
        style={{
          marginHorizontal: verticalScale(30),
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: verticalScale(20),
        }}
      >
        <CheckBox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? colors.placeholderColor : undefined}
        />
        <CustomText
          label="  I agree to the "
          color={colors.textColorGray}
          fontSize={10}
          alignSelf={"flex-end"}
        />
        <CustomText
          label="terms"
          color={colors.textColorGray}
          fontSize={10}
          alignSelf={"flex-end"}
          textStyle={styles.term}
        />
        <CustomText
          label=" and conditions."
          color={colors.textColorGray}
          fontSize={10}
          alignSelf={"flex-end"}
        />
      </View>
      <Button label={"Sign Up"} />
    </SafeAreaView>
  );
};

export default OTP;

const styles = ScaledSheet.create({
  loginImage: {
    width: "120@vs",
    height: "130@vs",
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: "35@s",
  },
  term: {
    textDecorationLine: "underline",
  },
});
