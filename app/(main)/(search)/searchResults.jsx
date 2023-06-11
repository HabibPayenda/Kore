import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import SearchResultFilters from "../../../components/searchResults/Filter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const SearchResults = () => {
  const searchTerm = useSelector((state) => state.app.searchTerm);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("chaged");
  }, [searchTerm]);
  return (
    <ScrollView style={{ backgroundColor: "#fafafa", paddingTop: 16, flex: 1 }}>
      <Text>SearchResults</Text>
    </ScrollView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
