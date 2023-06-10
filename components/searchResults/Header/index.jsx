import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import SearchResultFilters from "../Filter";

const SearchResultsHeader = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#8489c2", "#7453a0"]}
        style={styles.contentContainer}
      >
        <View style={styles.containerTop}>
          <TextInput style={styles.input} placeholder="د څه په لټه کې یاست؟" />
          <Pressable style={styles.backIcon} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fafafa" />
          </Pressable>
        </View>
        <SearchResultFilters />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SearchResultsHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    alignItems: "center",
    gap: 0,
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    position: "relative",
    paddingBottom: 52,
    backgroundColor: "white",
  },
  containerTop: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
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
