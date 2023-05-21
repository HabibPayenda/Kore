import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  header: {
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: "#333",
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  item: {
    marginBottom: 16,
  },
});

export default styles;
