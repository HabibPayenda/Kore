import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { usePathname, Link } from "expo-router";

const HomeFilter = () => {
  const pathname = usePathname();
  return (
    <View style={styles.container}>
      <Link
        href="warehouses"
        style={[
          styles.item,
          styles.item4,
          pathname === "/warehouses" && styles.itemActive,
        ]}
      >
        <MaterialCommunityIcons
          name="warehouse"
          size={pathname === "/warehouses" ? 28 : 24}
          color="#fafafa"
        />
      </Link>
      <Link
        href="lands"
        style={[
          styles.item,
          styles.item3,
          pathname === "/lands" && styles.itemActive,
        ]}
      >
        <MaterialIcons
          name="landscape"
          size={pathname === "/lands" ? 32 : 28}
          color="#fafafa"
        />
      </Link>
      <Link
        href="cars"
        style={[
          styles.item,
          styles.item2,
          pathname === "/cars" && styles.itemActive,
        ]}
      >
        <AntDesign
          name="car"
          size={pathname === "/cars" ? 28 : 24}
          color="#fafafa"
        />
      </Link>
      <Link
        href="homes"
        style={[
          styles.item,
          styles.item1,
          pathname === "/homes" && styles.itemActive,
        ]}
      >
        <AntDesign
          name="home"
          size={pathname === "/homes" ? 28 : 24}
          color="#fafafa"
        />
      </Link>
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
    textAlign: "center",
    padding: 0,
    margin: 0,
    lineHeight: 36,
  },
  itemActive: {
    height: 45,
    width: 45,
    borderRadius: 30,
    lineHeight: 40,
    elevation: 10,
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
