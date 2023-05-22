import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  image: {
    flex: 1,
    height: 300,
    width: "100%",
    resizeMode: "cover",
  },
  details: {
    flex: 2,
    padding: 16,
    width: Dimensions.get("window").width,
  },
  itemsGroup: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 8,
    width: 100,
  },

  middleItem: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  priceItem: {
    backgroundColor: COLORS.secondary,
    color: COLORS.lightWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.medium,
  },
  text: {
    marginLeft: 8,
    color: "#666",
  },
  companyText: {
    fontSize: SIZES.small,
    alignSelf: "center",
    color: COLORS.primary,
    fontFamily: FONT.regular,
  },
  nameText: {
    fontSize: SIZES.large,
    alignSelf: "center",
    color: COLORS.primary,
    fontFamily: FONT.regular,
  },
  priceText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.large,
  },
  descriptionContainer: {
    padding: SIZES.small,
  },
  description: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 16,
    flex: 1,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 3,
    padding: SIZES.xSmall,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginLeft: 8,
    color: COLORS.lightWhite,
    fontSize: SIZES.small,
  },
});

export default styles;
