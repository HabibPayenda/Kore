import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { usePathname, Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, colors } from "../../../constants";

const HomeFilter = () => {
  const pathname = usePathname();
  return (
    <View style={styles.container}>
      <LinearGradient
        style={[styles.item, pathname === "/warehouses" && styles.itemActive]}
        colors={
          pathname === "/warehouses"
            ? [colors.secondary1.main, colors.secondary1.dark1]
            : [colors.secondary2.main, colors.secondary2.dark1]
        }
      >
        <Link href="warehouses">
          <MaterialCommunityIcons
            name="warehouse"
            size={pathname === "/warehouses" ? 28 : 24}
            color="#fafafa"
          />
        </Link>
      </LinearGradient>
      <LinearGradient
        colors={
          pathname === "/lands"
            ? [colors.secondary1.main, colors.secondary1.dark1]
            : [colors.secondary2.main, colors.secondary2.dark1]
        }
        style={[styles.item, pathname === "/lands" && styles.itemActive]}
      >
        <Link href="lands">
          <MaterialIcons
            name="landscape"
            size={pathname === "/lands" ? 32 : 28}
            color="#fafafa"
          />
        </Link>
      </LinearGradient>
      <LinearGradient
        colors={
          pathname === "/cars"
            ? [colors.secondary1.main, colors.secondary1.dark1]
            : [colors.secondary2.main, colors.secondary2.dark1]
        }
        style={[styles.item, pathname === "/cars" && styles.itemActive]}
      >
        <Link href="cars">
          <AntDesign
            name="car"
            size={pathname === "/cars" ? 28 : 24}
            color="#fafafa"
          />
        </Link>
      </LinearGradient>
      <LinearGradient
        style={[styles.item, pathname === "/homes" && styles.itemActive]}
        colors={
          pathname === "/homes"
            ? [colors.secondary1.main, colors.secondary1.dark1]
            : [colors.secondary2.main, colors.secondary2.dark1]
        }
      >
        <Link href="homes">
          <AntDesign
            name="home"
            size={pathname === "/homes" ? 28 : 24}
            color="#fafafa"
          />
        </Link>
      </LinearGradient>
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
    height: 40,
    alignItems: "flex-end",
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
