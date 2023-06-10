import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 200,
    overflow: "hidden",
    backgroundColor: COLORS.lightWhite,
    elevation: 5,
    borderRadius: 8,
  },
  image: {
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
    width: 200,
    overflow: "hidden",
  },
  footer: {
    backgroundColor: COLORS.secondary,
    padding: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    marginRight: 8,
    color: COLORS.lightWhite,
  },
  infoText: {
    fontSize: 16,
    color: COLORS.lightWhite,
  },
  dealType: {
    backgroundColor: "#f1c40f",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  dealTypeText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default styles;
