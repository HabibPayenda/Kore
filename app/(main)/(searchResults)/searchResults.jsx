import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchResultFilters from "../../../../components/searchResults/Filter";

const SearchResults = () => {
  return (
    <>
      <SearchResultFilters />
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <Text>SearchResults</Text>
      </ScrollView>
    </>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
