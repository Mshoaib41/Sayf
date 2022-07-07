import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../../screens/Auth/OnBoarding";
import Login from "../../screens/Auth/Login";
import Register from "../../screens/Auth/Register";
import OTP from "../../screens/Auth/Otp";
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="OnBoarding"
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
  );
};

export default AuthStack;
