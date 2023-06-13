import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    padding: 16,
    alignItems: "flex-end",
  },
  title: {
    fontFamily: FONT.regular,
    color: COLORS.primary,
    fontSize: SIZES.large,
    textAlign: "center",
  },
  subTitle: {
    fontFamily: FONT.regular,
    color: COLORS.primary,
    fontSize: SIZES.medium,
    textAlign: "center",
  },
});

export default styles;
