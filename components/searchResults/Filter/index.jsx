import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, FONT } from "../../../constants";
import { useRouter } from "expo-router";

const SearchResultFilters = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.push("priceFilter")}
        style={styles.filterItem}
      >
        <FontAwesome5 name="chevron-down" size={12} color={COLORS.primary} />
        <Text style={styles.filterItemText}>قیمت</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("propertyFilter")}
        style={styles.filterItem}
      >
        <FontAwesome5 name="chevron-down" size={12} color={COLORS.primary} />
        <Text style={styles.filterItemText}>ملکیت</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("locationFilter")}
        style={styles.filterItem}
      >
        <FontAwesome5 name="chevron-down" size={12} color={COLORS.primary} />
        <Text style={styles.filterItemText}>ځای</Text>
      </Pressable>
    </View>
  );
};

export default SearchResultFilters;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    gap: 12,
    flexDirection: "row",
    position: "absolute",
    bottom: -20,
  },
  contentContainer: {},
  filterItem: {
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 8,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  filterItemText: {
    fontFamily: FONT.regular,
    fontSize: 12,
    color: COLORS.primary,
  },
});
