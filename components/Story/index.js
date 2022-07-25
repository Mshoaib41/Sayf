import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import colors from "../../util/colors";
import Icon from "../Icons";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../CustomText";
const Story = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <LinearGradient
        colors={[colors.green, colors.green1]}
        style={styles.imageContainer}
      >
        {item.id == 0 ? (
          <LinearGradient
            colors={[colors.green, colors.green1]}
            style={styles.plusIcon}
          >
            <Icon
              size={verticalScale(13)}
              family={"AntDesign"}
              name="plus"
              color={colors.white}
            />
          </LinearGradient>
        ) : (
          <View />
        )}
        <Image source={{ uri: item.user_image }} style={styles.image} />
      </LinearGradient>
      <CustomText
        label={item.id == 0 ? "Your Story" : item.name}
        textStyle={styles.name}
      />
    </TouchableOpacity>
  );
};

export default Story;

const styles = ScaledSheet.create({
  imageContainer: {
    width: verticalScale(55),
    height: verticalScale(55),
    margin: verticalScale(5),
    borderRadius: verticalScale(99),
    justifyContent: "center",
    alignItems: "center",  
 
  },
  image: {
    width: verticalScale(50),
    height: verticalScale(50),
    borderRadius: verticalScale(99),
    resizeMode: "cover",
    alignSelf: "center",
    
  },
  plusIcon: {
    borderRadius: verticalScale(99),
    backgroundColor: colors.green,
    alignSelf: "flex-end",
    top: verticalScale(2),
    right: -4,
    position: "absolute",
    zIndex: 1,
    padding: verticalScale(1.5),
  },
  name: {
    fontSize: verticalScale(10),
    color: colors.black,
    alignSelf: "center",
  },
});
