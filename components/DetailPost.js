import { View, Image, Text } from "react-native";
import React from "react";
import { ScaledSheet, verticalScale, scale } from "react-native-size-matters";
import images from "../assets/images";
import colors from "../util/colors";
import CustomText from "./CustomText";

const DetailPost = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.photoMainCont}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.photoCont}>
            <Image style={styles.photo} source={images.man} />
          </View>
          <CustomText
            label="Harry David"
            color={colors.black10}
            fontSize={14}
          />
        </View>
        <CustomText label="9:34 AM" color={colors.black10} fontSize={11} />
      </View>
      <View style={styles.divider} />
      <Text style={styles.detailText}>
        Do you guys know why yesterday police came over
        <Text style={{ color: colors.parimay }}> Downtown, St Louis </Text>?
      </Text>
      <CustomText
        color={colors.gray20}
        fontSize={13}
        marginBottom={verticalScale(10)}
        label="See more..."
      />
      <View style={styles.imgCont}>
        <Image style={styles.img} source={images.image7} />
      </View>
      <View style={{ height: verticalScale(5) }} />
      <View style={styles.divider} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.iconTextCont}>
          <Image source={images.starIcon} style={styles.icon} />
          <CustomText
            color={colors.darkGray}
            marginLeft={scale(8)}
            label="12"
            fontSize={15}
          />
        </View>
        <View style={styles.verticalScaleDivider} />
        <View style={styles.iconTextCont}>
          <Image source={images.chatIcon} style={styles.icon2} />
          <CustomText
            color={colors.darkGray}
            marginLeft={scale(8)}
            label="Discuss"
            fontSize={15}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailPost;

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.lightGray,
    padding: "12@vs",
    borderRadius: "16@vs",
    paddingBottom: 0,
    marginVertical: verticalScale(10),
  },
  photoMainCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "10@vs",
  },
  divider: {
    backgroundColor: colors.bottomBorder,
    height: "2@vs",
    width: "100%",
    borderRadius: "10@vs",
  },
  photoCont: {
    width: "30@vs",
    height: "30@vs",
    borderRadius: "100@vs",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10@s",
  },
  photo: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  detailText: {
    fontSize: "13@vs",
    lineHeight: 22,
    color: colors.black100,
  },
  imgCont: {
    width: "100%",
    height: "150@vs",
    borderRadius: "10@vs",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  verticalScaleDivider: {
    width: "2@s",
    height: "40@vs",
    backgroundColor: colors.bottomBorder,
    marginTop: -2,
  },
  iconTextCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
  },
  icon: {
    width: "20@ms",
    height: "20@ms",
    resizeMode: "contain",
  },
  icon2: {
    width: "25@ms",
    height: "25@ms",
    resizeMode: "contain",
  },
});
