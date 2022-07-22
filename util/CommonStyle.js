import { ScaledSheet } from "react-native-size-matters";
import colors from "./colors";
const CommonStyle = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  errorMessage: {
    fontSize: "10@vs",
    color: colors.red,
    fontStyle: "italic",
    marginLeft: "25@vs",
    marginTop: "5@s",
  },
});

export default CommonStyle;
