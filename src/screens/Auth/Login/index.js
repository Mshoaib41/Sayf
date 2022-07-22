import { Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import AuthWrapper from "../../../../components/AuthWrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonStyle from "../../../../util/CommonStyle";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomInput from "../../../../components/CustomInput";
import CustomText from "../../../../components/CustomText";
import colors from "../../../../util/colors";
import Preference from "react-native-preference";
import auth from "@react-native-firebase/auth";
const Login = ({ navigation }) => {
  const init = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(init);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (data) => {
    console.log("----Data", data);
    var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,9})$/;
    if (!data.email.length) {
      setError("Kindly enter your email");
    } else if (re.test(data.email) == false) {
      setError("Kindly add valid email");
    } else if (data.password.length < 8) {
      setError("Invalid Password, kindly add valid password");
    } else {
      signUpWithEmail(data);
    }
  };
  const signUpWithEmail = async (data) => {
    setLoading(true);
    try {
      const userCredentials = await auth().signInWithEmailAndPassword(
        data.email,
        data.password
      );
      setLoading(false);
      Preference.setWhiteList([]);
      Preference.set("userID", userCredentials.user.uid);
      navigation.navigate("MainStack");
      setUserData(init);
    } catch (error) {
      console.log("-----ERror", error);
      setError("Invalid email or password")
    }
  };
  return (
    <SafeAreaView style={CommonStyle.mainContainer}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../../../assets/images/Image4.png")}
            style={styles.loginImage}
          />
          <AuthWrapper
            loading={loading}
            buttonIcon={false}
            buttonOnPress={() => handleSubmit(userData)}
            buttonLabel={"Log in"}
            continueLable={"Or continue with"}
            navigation={navigation}
            signTitle={", Sign Up"}
            onPress={() => navigation.navigate("Register")}
          >
            <CustomInput
              imagePath={require("../../../../assets/images/User.png")}
              placeholder="Youremail@gmail.com"
              value={userData.email}
              onChange={(value) => setUserData({ ...userData, email: value })}
            />
            <CustomInput
              imagePath={require("../../../../assets/images/Lock.png")}
              placeholder="Password"
              secureTextEntry={true}
              value={userData.password}
              onChange={(value) =>
                setUserData({ ...userData, password: value })
              }
            />
            {error ? (
              <CustomText label={error} textStyle={CommonStyle.errorMessage} />
            ) : (
              <View />
            )}
            <View style={{ marginHorizontal: verticalScale(30) }}>
              <CustomText
                label="Forgot Password?"
                color={colors.textColorGray}
                fontSize={10}
                alignSelf={"flex-end"}
                marginTop={10}
              />
            </View>
          </AuthWrapper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = ScaledSheet.create({
  loginImage: {
    width: "120@vs",
    height: "130@vs",
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: "35@s",
    marginRight: "30@s",
  },
});
