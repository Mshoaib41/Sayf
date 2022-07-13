import { Image,TouchableOpacity } from "react-native";
import React from "react";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../../components/CustomText";
import colors from "../../../../../util/colors";

const TextWithIcon = ({ imgPath, text, textColor,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.mainContainer}>
      <Image style={styles.icon} source={imgPath} />
      <CustomText
        label={text}
        fontSize={verticalScale(10)}
        color={textColor || colors.black}
      />
    </TouchableOpacity>
  );
};

export default TextWithIcon;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.profileBg,
    width: "100%",
    borderRadius: "7@vs",
    paddingVertical: "15@vs",
    paddingHorizontal: "18@s",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10@vs",
  },
  icon: {
    width: "18@vs",
    height: "18@vs",
    resizeMode: "center",
    marginRight: "20@s",
  },
});
