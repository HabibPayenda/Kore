import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchResults = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <Text>SearchResults</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
