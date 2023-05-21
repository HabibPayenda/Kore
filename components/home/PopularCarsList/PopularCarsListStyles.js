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
    padding: 16,
  },
  item: {
    marginRight: 16,
  },
});

export default styles;
