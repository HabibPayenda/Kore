import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import SearchResultFilters from "../../../components/searchResults/Filter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchHomes } from "../../../data/homesSlice";
import PopularHomeCard from "../../../components/home/PopularHomesCard/PopularHomesCard";
import HomeCard from "../../../components/searchResults/HomeCard";

const SearchResults = () => {
  const searchTerm = useSelector((state) => state.app.searchTerm);
  const searchResults = useSelector((state) => state.homes.searchResults);
  console.log(searchResults);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchHomes(searchTerm));
  }, [searchTerm]);
  const renderSearchResults = () => {
    let result = [];
    searchResults?.map((home) => {
      result.push(<HomeCard key={home?.id} home={home} />);
    });
    return result;
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{ backgroundColor: "#fafafa", flex: 1 }}>
        <View style={styles.contentContainer}>{renderSearchResults()}</View>
      </ScrollView>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 22,
    backgroundColor: "#fafafa",
    flex: 1,
  },
  contentContainer: {},
});
