import { TouchableOpacity, View } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import colors from "../util/colors";
import CustomText from "./CustomText";

const SeeAll = ({ title, onPress }) => {
  return (
    <View style={styles.seeAllCont}>
      <CustomText label={title} fontSize={13} color={colors.blackColor} />
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <CustomText label="See all" fontSize={13} color={colors.parimay} />
      </TouchableOpacity>
    </View>
  );
};

export default SeeAll;

const styles = ScaledSheet.create({
  seeAllCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20@vs",
    marginBottom: "15@vs",
  },
});