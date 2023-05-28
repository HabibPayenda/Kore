import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  header: {
    marginTop: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: "#333",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default styles;
