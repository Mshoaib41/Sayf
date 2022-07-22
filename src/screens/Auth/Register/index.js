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
import { addUserData } from "../../../firebase/fireStore/users";
import auth from "@react-native-firebase/auth";
import Preference from "react-native-preference";
const Register = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const init = {
    email: "",
    phone: "",
    password: "",
  };
  const [userData, setUserData] = useState(init);
  const [error, setError] = useState("");
  const handleSubmit = ({ userData, isChecked }) => {
    console.log("---Data", isChecked);
    var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,9})$/;
    if (!userData.email.length) {
      setError("kindly enter email");
    } else if (re.test(userData.email) == false) {
      setError("Enter Valid email");
    } else if (userData.phone.length < 9) {
      setError("Enter Valid phone number");
    } else if (!userData.password.length) {
      setError("Kindly enter password");
    } else if (userData.password.length < 8) {
      setError("Password must be greater then 8");
    } else if (!isChecked) {
      setError("Please accepet terms and condition before continue");
    } else {
      signUpWithEmail(userData);
    }
  };
  const signUpWithEmail = async (user) => {
    setLoading(true);

    try {
      const userCredentials = await auth().createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      setUserData(init);
      setError("");
      Preference.setWhiteList([]);
      navigation.navigate("MainStack");
      Preference.set("userID", userCredentials.user.uid);
      await addUserData(userCredentials.user.uid, user.phone, user.email);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("The email address is already in use by another account.");
      setTimeout(() => {
        setError("");
      }, 2000);
      console.log("-----Error", error);
    }
  };
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
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
          fontFamily="Poppins-SemiBold"
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
        loading={loading}
        signTitle={", Sign In"}
        onPress={() => navigation.navigate("Login")}
        buttonOnPress={() => handleSubmit({ userData, isChecked })}
      >
        {console.log("====Data", userData)}
        <CustomInput
          imagePath={require("../../../../assets/images/Email.png")}
          placeholder="Email Address"
          value={userData.email}
          onChange={(v) => setUserData({ ...userData, email: v })}
        />
        <CustomInput
          imagePath={require("../../../../assets/images/Phone.png")}
          placeholder="Mobile Number"
          value={userData.phone}
          onChange={(v) => setUserData({ ...userData, phone: v })}
        />
        <CustomInput
          imagePath={require("../../../../assets/images/Lock.png")}
          placeholder="Password"
          secureTextEntry={true}
          value={userData.password}
          onChange={(v) => setUserData({ ...userData, password: v })}
        />
        {error.length ? (
          <CustomText label={error} textStyle={CommonStyle.errorMessage} />
        ) : (
          <View />
        )}
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
            checked={isChecked}
            onPress={() => {
              setChecked(!isChecked);
            }}
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
