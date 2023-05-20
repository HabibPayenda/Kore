import { StyleSheet } from "react-native";
import { FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    fontFamily: FONT.regular,
    backgroundColor: "#f1c40f",
    padding: 16,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
