import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SearchResultsHeader = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="د څه په لټه کې یاست؟" />
      <Pressable style={styles.backIcon} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
      </Pressable>
    </SafeAreaView>
  );
};

export default SearchResultsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 12,
    gap: 12,
    paddingTop: 12,
  },
  input: {
    flex: 1,
    backgroundColor: "#fafafa",
    height: 30,
    elevation: 1,
    padding: 0,
    paddingHorizontal: 12,
    textAlign: "right",
  },
  backIcon: {
    transform: [{ rotate: "180deg" }],
  },
});
