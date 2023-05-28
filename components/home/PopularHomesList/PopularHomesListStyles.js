import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  link: {
    color: COLORS.lightWhite,
    fontSize: SIZES.small,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.medium,
    borderRadius: 3,
    fontFamily: FONT.regular,
  },
});

export default styles;
