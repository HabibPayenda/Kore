import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    height: 200,
    resizeMode: "cover",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  text: {
    marginLeft: 8,
    color: "#666",
  },
});

export default styles;
