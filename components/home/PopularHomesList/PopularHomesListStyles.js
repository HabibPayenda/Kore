import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 3,
    // backgroundColor: "#fff",
    // elevation: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    paddingHorizontal: 3,
    borderRadius: 10,
  },
});

export default styles;
