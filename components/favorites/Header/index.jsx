import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../../constants";
import { useNavigation } from "expo-router";

const FavoritesHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text style={styles.title}>ستاسو انتخابونه </Text>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.navigate("favoriteHomes")}>
          <Text style={styles.navbarItem}>ګودامونه</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("favoriteCars")}>
          <Text style={styles.navbarItem}>موټر</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.navbarItem}>ځمکې</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("favoriteHomes")}>
          <Text style={styles.navbarItem}>کورونه</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FavoritesHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    padding: SIZES.medium,
    color: COLORS.primary,
    alignSelf: "center",
  },

  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },

  navbarItem: {
    paddingHorizontal: 12,
    paddingVertical: 3,
    backgroundColor: COLORS.secondary,
    borderRadius: 24,
    color: COLORS.lightWhite,
    fontFamily: FONT.regular,
    fontSize: 12,
  },
});
