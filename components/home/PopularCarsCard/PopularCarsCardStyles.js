import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: "cover",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SIZES.small,
    padding: 8,
    justifyContent: "space-between",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  brand: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: COLORS.gray,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  fullItem: {},
  model: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
  make: {
    fontFamily: FONT.regular,
  },
  text: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
});

export default styles;
