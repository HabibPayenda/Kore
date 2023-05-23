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
    marginRight: 18,
  },
  input: {
    height: SIZES.large,
    fontSize: SIZES.medium,
    color: "#333",
    width: 200,
  },
});

export default styles;
