import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: 200,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  footer: {
    borderColor: COLORS.gray,
    borderTopWidth: 1,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small,
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailContainerTop: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  item: {
    alignItems: "center",
  },
  detailContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  detailText: {
    marginLeft: 4,
    color: "#333",
    fontSize: 14,
  },
  icon: {
    marginRight: 8,
  },

  priceContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: SIZES.xSmall,
    paddingTop: SIZES.small,
    borderColor: COLORS.gray,
    borderTopWidth: 1,
  },
});

export default styles;
