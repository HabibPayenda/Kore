import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import SearchResultFilters from "../../../components/searchResults/Filter";

const SearchResults = () => {
  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#fafafa", paddingTop: 16, flex: 1 }}
      >
        <Text>SearchResults</Text>
      </ScrollView>
    </>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
