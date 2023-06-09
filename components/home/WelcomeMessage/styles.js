import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    padding: 16,
    alignItems: "flex-end",
    borderRadius: 12,
  },
  title: {
    fontFamily: FONT.regular,
    color: "#fafafa",
    fontSize: SIZES.large,
    textAlign: "center",
  },
  subTitle: {
    fontFamily: FONT.regular,
    color: "#fafafa",
    fontSize: SIZES.medium,
    textAlign: "center",
  },
});

export default styles;
