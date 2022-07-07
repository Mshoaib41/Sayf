import { Text, View, Image } from "react-native";
import React, { useState } from "react";
import AuthWrapper from "../../../../components/AuthWrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonStyle from "../../../../util/CommonStyle";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomInput from "../../../../components/CustomInput";
import CustomText from "../../../../components/CustomText";
import colors from "../../../../util/colors";
import { CheckBox } from "react-native-elements";
const Register = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      {/* <Image
        source={require("../../../../assets/images/Image4.png")}
        style={styles.loginImage}
      /> */}
      <View
        style={{
          marginHorizontal: verticalScale(20),
          marginTop: verticalScale(20),
          marginBottom: verticalScale(30),
        }}
      >
        <CustomText
          label="Create Account"
          fontSize={23}
          fontFamily="PoppinsSemiBold"
        />
        <CustomText
          label="Connect with your friends today! "
          fontSize={14}
          color={colors.placeholderColor}
          marginTop={5}
        />
      </View>
      <AuthWrapper
        buttonIcon={false}
        buttonLabel={"Sign up"}
        continueLable={"Or Sign Up with"}
        navigation={navigation}
        signTitle={", Sign In"}
        onPress={() => navigation.navigate("Login")}
        buttonOnPress={() => navigation.navigate("OTP")}
      >
        <CustomInput
          imagePath={require("../../../../assets/images/Email.png")}
          placeholder="Email Address"
        />
        <CustomInput
          imagePath={require("../../../../assets/images/Phone.png")}
          placeholder="Mobile Number"
        />
        <CustomInput
          imagePath={require("../../../../assets/images/Lock.png")}
          placeholder="Password"
          secureTextEntry={true}
        />
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
      </AuthWrapper>
    </SafeAreaView>
  );
};

export default Register;

const styles = ScaledSheet.create({
  loginImage: {
    width: "120@vs",
    height: "130@vs",
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: "35@s",
    marginRight: "30@s",
  },
  checkbox: {
    height: 15,
    width: 15,
  },
  term: {
    textDecorationLine: "underline",
  },
});
