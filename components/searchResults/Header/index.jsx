import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants";

const SearchResultsHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SearchResultsHeader</Text>
    </SafeAreaView>
  );
};

export default SearchResultsHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
