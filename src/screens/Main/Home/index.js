import { TouchableOpacity, ScrollView, Text, FlatList } from "react-native";
import React from "react";
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          data={NOTIFICATIONS_DATA}
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
    paddingHorizontal: verticalScale(8),
    backgroundColor: colors.backgroundColor,
    paddingVertical: verticalScale(10),
  },
  mapIconCont: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: "12@vs",
  },
});
