import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import { verticalScale } from "react-native-size-matters";
import colors from "../../../../util/colors";
import LinearGradient from "react-native-linear-gradient";
import Icon from "../../../../components/Icons";
import CustomText from "../../../../components/CustomText";
import { sendMessage } from "../../../firebase/fireStore/chats";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ChatBody } from "../../../../components/Chats/ChatBody";
const Conversation = ({ navigation, route }) => {
  console.log("----Route", route.params);
  const { data, authUserID } = route.params;
  const [messageText, setMessageText] = useState("");

  const handleSubmit = async (message) => {
    await sendMessage(data.id, authUserID, message);
    setMessageText("");
  };
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        start={{ x: -0.4, y: 0.1 }}
        end={{ x: 2.5, y: 0.1 }}
        colors={[colors.green, colors.green1]}
        style={{ flex: 1 }}
      >
        <View
          style={{ height: "15%", flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ marginHorizontal: verticalScale(10) }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.pop()}
            >
              <Icon
                size={verticalScale(24)}
                family={"AntDesign"}
                name="arrowleft"
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", width: "65%", alignItems: "center" }}
          >
            <Image
              source={{ uri: "https://picsum.photos/id/290/200/300" }}
              style={styles.iamage}
            />
            <View>
              <CustomText
                label={route.params.data?.email?.split?.("@")?.[0]}
                textStyle={styles.name}
              />
              <CustomText label="Online" textStyle={styles.status} />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon
              size={verticalScale(18)}
              family={"FontAwesome5"}
              name="phone-alt"
              color={colors.white}
            />
            <View style={{ width: verticalScale(10) }} />
            <Icon
              size={verticalScale(18)}
              family={"Entypo"}
              name="dots-three-vertical"
              color={colors.white}
            />
          </View>
        </View>
        <View style={styles.innerMainContainer}>
          <ChatBody userId={authUserID} relatedUserId={data.id} />
        </View>
        <View style={styles.textInputContainer}>
          <View style={{ width: verticalScale(20) }} />
          <View style={styles.textInputContainer1}>
            <TextInput
              placeholder="Type your message here..."
              placeholderTextColor={colors.fullGray}
              style={{
                backgroundColor: colors.white,
                borderRadius: verticalScale(30),
                height: verticalScale(35),
                fontSize: verticalScale(12),
                color: colors.black,
                paddingHorizontal: verticalScale(10),
              }}
              value={messageText}
              onChangeText={(value) => setMessageText(value)}
            />
          </View>
          <View style={{ width: verticalScale(10) }} />

          <View style={styles.plusIcon}>
            <Icon
              size={verticalScale(16)}
              family={"Entypo"}
              name="plus"
              color={colors.white}
            />
          </View>

          <View style={{ width: verticalScale(10) }} />
          <TouchableOpacity
            activeOpacity={0.6}
            disabled={!messageText}
            onPress={() => handleSubmit(messageText)}
          >
            <Icon
              size={verticalScale(18)}
              family={"Ionicons"}
              name="ios-send"
              color={colors.parimay}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Conversation;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  innerMainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: verticalScale(30),
    borderTopRightRadius: verticalScale(30),
    padding: verticalScale(15),
  },
  iamage: {
    width: verticalScale(40),
    height: verticalScale(40),
    borderRadius: verticalScale(99),
    marginRight: verticalScale(10),
  },
  name: {
    fontSize: verticalScale(15),
    color: colors.white,
  },
  status: {
    fontSize: verticalScale(10),
    color: colors.white,
  },
  message: {
    backgroundColor: colors.grenish,
    alignSelf: "flex-end",
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(5),
    borderBottomLeftRadius: verticalScale(10),
    borderBottomRightRadius: verticalScale(10),
    borderTopLeftRadius: verticalScale(10),
  },
  message1: {
    backgroundColor: colors.messageColor,
    alignSelf: "flex-start",
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(5),
    borderTopRightRadius: verticalScale(10),
    borderBottomLeftRadius: verticalScale(10),
    borderBottomRightRadius: verticalScale(10),
  },
  messageText: {
    fontSize: verticalScale(9),
    color: colors.white,
  },
  timerText: {
    fontSize: verticalScale(9),
    color: colors.lightGray1,
    alignSelf: "flex-end",
    marginTop: "10@s",
  },
  timerText1: {
    fontSize: verticalScale(9),
    color: colors.lightGray1,
    alignSelf: "flex-start",
    marginTop: "10@s",
  },
  textInputContainer: {
    backgroundColor: colors.lightGrayColor,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: verticalScale(10),
  },
  textInputContainer1: {
    width: "75%",
  },
  plusIcon: {
    backgroundColor: colors.parimay,
    borderRadius: verticalScale(90),
  },
});
