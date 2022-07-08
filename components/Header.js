import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import CustomText from "./CustomText";
import Images from "..//assets/images";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, height, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={{ width: "15%" }}>
        <Pressable
          onPress={() => navigation.navigate("HomeStack", { screen: "Home" })}
        >
          <Icon source={Images.arrow_left} height={height} />
        </Pressable>
      </View>
      <View style={{ width: "70%", alignItems: "center" }}>
        <CustomText fontSize={18} label={title} />
      </View>
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
});
