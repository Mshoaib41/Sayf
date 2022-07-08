import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../../../util/colors";
import { verticalScale, scale } from "react-native-size-matters";
import Post from "../../../../components/Post";
import DetailPost from "../../../../components/DetailPost";
import Header from "../../../../components/Header";
import Icon from "../../../../components/Icons";
import CustomText from "../../../../components/CustomText";

const SellAllData = ({ route, navigation }) => {
  const { feed } = route.params;
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header height={40} />
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
      <FlatList
        data={data}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item }) => {
          return feed ? <Post /> : <DetailPost />;
        }}
      />
    </SafeAreaView>
  );
};

export default SellAllData;

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
  },
  mapIconCont: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    top: -10,
  },
});
