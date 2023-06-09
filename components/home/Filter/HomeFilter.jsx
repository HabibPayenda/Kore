import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeFilter = () => {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.item, styles.item4]}>
        <MaterialCommunityIcons name="warehouse" size={24} color="#fafafa" />
      </Pressable>
      <Pressable style={[styles.item, styles.item3]}>
        <MaterialIcons name="landscape" size={28} color="#fafafa" />
      </Pressable>
      <Pressable style={[styles.item, styles.item2]}>
        <AntDesign name="car" size={24} color="#fafafa" />
      </Pressable>
      <Pressable style={[styles.item, styles.item1]}>
        <AntDesign name="home" size={24} color="#fafafa" />
      </Pressable>
    </View>
  );
};

export default HomeFilter;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -20,
    flexDirection: "row",
    gap: 12,
  },
  item: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    borderColor: "#fafafa",
    borderWidth: 1,
  },
  item1: {
    backgroundColor: "#00a7fa",
  },
  item2: {
    backgroundColor: "#ff2f88",
  },
  item3: {
    backgroundColor: "#6722ff",
  },
  item4: {
    backgroundColor: "#ff9633",
  },
});
