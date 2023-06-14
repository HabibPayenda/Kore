import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 3,
  },
  title: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    paddingHorizontal: 3,
    borderRadius: 10,
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
