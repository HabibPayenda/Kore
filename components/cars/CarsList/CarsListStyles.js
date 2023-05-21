import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
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
