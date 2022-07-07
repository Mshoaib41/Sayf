import { View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { verticalScale } from "react-native-size-matters";
import Map from "../../screens/Main/Map";
import Home from "../../screens/Main/Home";
import Notification from "../../screens/Main/Notification";
import Profile from "../../screens/Main/Profile";
import Messages from "../../screens/Main/Message";
import colors from "../../../util/colors";

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.parimay,
          height: verticalScale(50),
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name == "HomeStack") {
            if (focused) {
              return (
                <View
                  style={{
                    backgroundColor: colors.white,
                    paddingHorizontal: verticalScale(10),
                    borderRadius: verticalScale(25),
                    paddingVertical: verticalScale(4),
                  }}
                >
                  <Image
                    source={require("../../../assets/images/Icon/HomeActive.png")}
                    resizeMode="center"
                    style={{
                      width: verticalScale(30),
                      height: verticalScale(30),
                    }}
                  />
                </View>
              );
            } else {
              return (
                <View>
                  <Image
                    source={require("../../../assets/images/Icon/HomeInActive.png")}
                    resizeMode="center"
                    style={{
                      width: verticalScale(30),
                      height: verticalScale(30),
                    }}
                  />
                </View>
              );
            }
          } else if (route.name == "Message") {
            if (focused) {
              return (
                <View
                  style={{
                    backgroundColor: colors.white,
                    paddingHorizontal: verticalScale(10),
                    borderRadius: verticalScale(25),
                    paddingVertical: verticalScale(4),
                  }}
                >
                  <Image
                    source={require("../../../assets/images/Icon/MessageActive.png")}
                    resizeMode="center"
                    style={{
                      width: verticalScale(30),
                      height: verticalScale(30),
                    }}
                  />
                </View>
              );
            } else {
              return (
                <View>
                  <Image
                    source={require("../../../assets/images/Icon/Message.png")}
                    resizeMode="center"
                    style={{
                      width: verticalScale(30),
                      height: verticalScale(30),
                    }}
                  />
                </View>
              );
            }
          } else if (route.name == "Notification") {
            if (focused) {
              return (
                <View
                  style={{
                    backgroundColor: colors.white,
                    paddingHorizontal: verticalScale(10),
                    borderRadius: verticalScale(25),
                    paddingVertical: verticalScale(4),
                  }}
                >
                  <Image
                    source={require("../../../assets/images/Icon/Bell.png")}
                    resizeMode="center"
                    style={{
                      width: verticalScale(30),
                      height: verticalScale(30),
                    }}
                  />
                </View>
              );
            } else {
              return (
                <View>
                  <Image
                    source={require("../../../assets/images/Icon/BellInactive.png")}
                    resizeMode="center"
                    style={{
                      width: verticalScale(30),
                      height: verticalScale(30),
                    }}
                  />
                </View>
              );
            }
          } else if (route.name == "Profile") {
            if (focused) {
              return (
                <View
                  style={{
                    backgroundColor: colors.white,
                    paddingHorizontal: verticalScale(10),
                    borderRadius: verticalScale(25),
                    paddingVertical: verticalScale(4),
                  }}
                >
                  <Image
                    source={require("../../../assets/images/Icon/UserActive.png")}
                    resizeMode="center"
                    style={{
                      width: verticalScale(30),
                      height: verticalScale(30),
                    }}
                  />
                </View>
              );
            } else {
              return (
                <View>
                  <Image
                    source={require("../../../assets/images/Icon/User.png")}
                    resizeMode="center"
                    style={{
                      width: verticalScale(30),
                      height: verticalScale(30),
                    }}
                  />
                </View>
              );
            }
          }
        },
      })}
      // screenOptions={{
      //   headerShown: false,
      //   tabBarShowLabel: false,
      //   tabBarActiveTintColor: colors.white,
      //   tabBarStyle: { backgroundColor: colors.parimay },
      //   tabBarIcon:(iconName)=>{

      //   }
      // }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Message" component={Messages} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default MainStack;
