import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  link: {
    fontSize: 16,
    color: "#f1c40f",
  },
  contentContainer: {
    paddingVertical: SIZES.small,
  },
  item: {
    marginRight: 16,
  },
});

export default styles;
