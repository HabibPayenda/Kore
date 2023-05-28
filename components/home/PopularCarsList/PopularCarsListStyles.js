import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    fontFamily: FONT.regular,
  },
  link: {
    fontSize: SIZES.small,
    color: COLORS.lightWhite,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SIZES.medium,
    fontFamily: FONT.regular,
    borderRadius: 3,
  },
  contentContainer: {
    paddingVertical: SIZES.small,
    gap: SIZES.small,
  },
  item: {},
});

export default styles;
