import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    width: 200,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  footer: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderColor: COLORS.gray,
    borderTopWidth: 1,
    gap: SIZES.small,
  },
  fullItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  text: {
    marginLeft: 8,
    color: "#666",
    fontSize: SIZES.xSmall,
  },
  textTitle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.secondary,
  },
});

export default styles;
