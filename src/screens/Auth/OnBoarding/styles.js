import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../../util/colors";

const styles = ScaledSheet.create({
  onBoardingContainer: {
    height: "50%",
    width: "75%",
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: "25@s",

    shadowColor: colors.boxShadowColor,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.38,
    shadowRadius: 15.0,

    elevation: 20,
  },
  ImageContainer: {
    width: "175@vs",
    height: "250@vs",
    resizeMode: "contain",
  },
  ImageContainer1: {
    width: "250@vs",
    height: "250@vs",
    resizeMode: "contain",
  },
  title: {
    fontSize: "18@vs",
    fontFamily: "PoppinsLight",
    color: colors.black,
  },
  dotInactive: {
    width: "8@s",
    height: "8@s",
    backgroundColor: colors.black,
    borderRadius: "25@s",
    marginHorizontal: "10@s",
  },
  dotactive: {
    width: "12@s",
    height: "12@s",
    backgroundColor: colors.black,
    borderRadius: "99@s",
    marginHorizontal: "10@s",
  },
});
export default styles;
