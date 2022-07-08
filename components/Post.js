import { View, ImageBackground, Text } from "react-native";
import React from "react";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "./CustomText";
import colors from "../util/colors";
import images from "../assets/images";


const Post = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground style={styles.container} source={images.post}>
        <View style={{ margin: verticalScale(10) }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
          <Text>Helo</Text>
            <CustomText
              color={colors.white}
              marginLeft={scale(8)}
              label="Ocean Shores, Washington"
              fontSize={10}
            />
          </View>
          <CustomText
            color={colors.white}
            fontSize={13}
            label="An unusual thing happend with me while..."
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Post;

const styles = ScaledSheet.create({
  mainContainer: {
    width: "100%",
    height: "280@vs",
    borderRadius: "16@vs",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginVertical:verticalScale(5)
  },
  container: {
    width: "102%",
    height: "102%",
    resizeMode: "stretch",
    alignItems: "flex-end",
    flexDirection: "row",
  },
});