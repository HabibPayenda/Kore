import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.xSmall,
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.small,
    marginTop: SIZES.small,
  },
  icon: {
    marginLeft: SIZES.medium,
    color: COLORS.primary,
  },
  input: {
    flex: 1,
    height: SIZES.large,
    fontSize: SIZES.medium,
    color: "#333",
  },
});

export default styles;
