import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  infoText: {
    color: "#fff",
    fontSize: 16,
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
