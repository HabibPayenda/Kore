import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: SIZES.xSmall,
    paddingVertical: 3,
    paddingHorizontal: SIZES.small,
    elevation: 2,
    width: "80%",
  },
  icon: {
    marginLeft: SIZES.medium,
    color: COLORS.primary,
  },
  input: {
    flex: 1,
    height: SIZES.large,
    fontSize: 14,
    color: "#333",
  },
});

export default styles;
