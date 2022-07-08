import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import TextInputComponent from "../../../../components/TextInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale } from "react-native-size-matters";
import { NOTIFICATIONS_DATA } from "../../../../util/Data";
import Story from "../../../../components/Story";
import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../../util/colors";
import CustomText from "../../../../components/CustomText";
import { Message_DATA } from "../../../../util/Data";
import MessageComp from "../../../../components/Message";
import { callData } from "../../../../util/Data";
const Messages = ({ navigation }) => {
  const [active, setActive] = useState(1);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ height: verticalScale(15) }} />
      <TextInputComponent />
      <View style={{ height: verticalScale(10) }} />
      <View>
        <FlatList
          data={NOTIFICATIONS_DATA}
          horizontal
          keyExtractor={(item, index) => item.id + index.toString()}
          renderItem={({ item }) => {
            return <Story item={item} />;
          }}
        />
      </View>
      <View style={{ height: verticalScale(10) }} />
      <View style={styles.tabMainContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={
            active == 1 ? styles.innerContainer : styles.innerContainerInactive
          }
          onPress={() => setActive(1)}
        >
          <CustomText label={"Chats"} textStyle={styles.tabText} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={
            active == 2 ? styles.innerContainer : styles.innerContainerInactive
          }
          onPress={() => setActive(2)}
        >
          <CustomText label={"Calls"} textStyle={styles.tabText} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={active == 1 ? Message_DATA : callData}
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={({ item }) => {
          return (
            <MessageComp item={item} active={active} navigation={navigation} />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Messages;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: verticalScale(5),
    backgroundColor: colors.backgroundColor,
    paddingVertical: verticalScale(10),
  },
  tabMainContainer: {
    backgroundColor: colors.lightGrayColor,
    width: "95%",
    alignSelf: "center",
    borderRadius: verticalScale(30),
    flexDirection: "row",
    justifyContent: "space-between",
    padding: verticalScale(5),
    marginVertical: verticalScale(10),
  },
  innerContainer: {
    width: "49%",
    backgroundColor: colors.white,
    borderRadius: verticalScale(30),
    alignItems: "center",
    padding: verticalScale(5),
  },
  innerContainerInactive: {
    width: "49%",
    backgroundColor: "transparent",
    borderRadius: verticalScale(30),
    alignItems: "center",
    padding: verticalScale(5),
  },
  tabText: {
    fontSize: verticalScale(10),
    color: colors.black,
  },
});
