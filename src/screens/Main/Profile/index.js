import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../../../components/Header";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import colors from "../../../../util/colors";
import Icon from "../../../../components/Icon";
import CustomText from "../../../../components/CustomText";
import TextWithIcon from "./molecules/TextWithIcon";
import images from "../../../../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import auth from "@react-native-firebase/auth";
import Preference from "react-native-preference";
const Profile = ({ navigation }) => {
  const signOut = async () => {
    await auth().signOut();
    navigation.navigate("AuthStack", { screen: "Login" });
  };
  const dataArray = [
    {
      id: 1,
      imgPath: images.bellIcon,
      text: "Notifications",
      onPress: () => console.log("Notifications"),
    },
    {
      id: 2,
      imgPath: images.blockIcon,
      text: "Blocked",
      onPress: () => console.log("Blocked"),
    },
    {
      id: 3,
      imgPath: images.chatsIcon,
      text: "Chats Settings",
      onPress: () => console.log("Chats Settings"),
    },
    {
      id: 4,
      imgPath: images.smileIcon,
      text: "Feedback",
      onPress: () => console.log("Feedback"),
    },
    {
      id: 5,
      imgPath: images.logOutIcon,
      text: "Log Out",
      onPress: () => {
        signOut();
        Preference.clear();
      },
    },
    {
      id: 6,
      imgPath: images.emergencyIcon,
      text: "Emergency Call 911",
      textColor: colors.red,
      onPress: () => console.log("Emergency Call 911"),
    },
  ];
  return (
    <SafeAreaView style={styles.root}>
      <View
        style={{
          paddingBottom: verticalScale(20),
        }}
      >
        <Header title="SAYF SETTINGS" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.profileCont}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                console.log("Edit Profile");
              }}
              style={styles.profileIconCont}
            >
              <Image source={images.editIcon} style={styles.profileIcon} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText
              label="Clinton Benard"
              fontSize={verticalScale(18)}
              marginBottom={verticalScale(5)}
            />
            <Image source={images.editIcon} style={styles.editIconStyle} />
          </View>
          <CustomText
            label="@Clinton_Benard"
            fontSize={verticalScale(10)}
            marginBottom={verticalScale(20)}
          />
          {dataArray.map((item, index) => {
            return (
              <TextWithIcon
                key={item.id}
                onPress={item.onPress}
                imgPath={item.imgPath}
                text={item.text}
                textColor={item.textColor}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: "16@s",
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
  },
  profileCont: {
    width: "140@ms",
    height: "140@ms",
    backgroundColor: colors.profileBg,
    borderRadius: "100@vs",
    marginBottom: "20@vs",
  },
  profileIconCont: {
    backgroundColor: colors.white,
    width: "22@ms",
    height: "22@ms",
    borderRadius: "100@vs",
    alignSelf: "flex-end",
    marginTop: "40@vs",
    marginRight: "-12@s",
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: "1@vs",
  },
  profileIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
    marginLeft: "3@s",
  },
  editIconStyle: {
    width: "20@vs",
    height: "20@vs",
    resizeMode: "contain",
    marginLeft: "12@s",
  },
  root: {
    flex: 1,
    padding: verticalScale(10),
  },
});
