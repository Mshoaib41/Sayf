import {
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import TextInputComponent from "../../../../components/TextInput";
import colors from "../../../../util/colors";

import Post from "../../../../components/Post";
import DetailPost from "../../../../components/DetailPost";
import SeeAll from "../../../../components/SeeAll.js";
import Icon from "../../../../components/Icons";
import Story from "../../../../components/Story";
import { NOTIFICATIONS_DATA } from "../../../../util/Data";
import { getAllUsers } from "../../../firebase/fireStore/users";

const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("Map")}
        style={styles.mapIconCont}
      >
        <Icon
          size={verticalScale(16)}
          family={"EvilIcons"}
          name="location"
          color={colors.black}
        />
        <CustomText
          alignSelf="center"
          label="Your Location, Here"
          color={colors.blackColor}
          fontSize={10}
          marginLeft={scale(5)}
        />
      </TouchableOpacity>

      <TextInputComponent
        iconWidth="18%"
        width="100%"
        backgroundColor={colors.gray10}
        placeholder={"Search User"}
      />
      <View style={{ height: verticalScale(10) }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          data={NOTIFICATIONS_DATA}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({ item }) => {
            return <Story item={item} />;
          }}
        />
        <SeeAll
          title="Nearby"
          onPress={() => navigation.navigate("SellAllData", { feed: true })}
        />
        <Post />
        <SeeAll
          title="Followings"
          onPress={() => navigation.navigate("SellAllData", { feed: false })}
        />
        <DetailPost />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: "16@s",
    backgroundColor: colors.backgroundColor,
    marginTop: "10@vs",
  },
  mapIconCont: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: "12@vs",
  },
});
