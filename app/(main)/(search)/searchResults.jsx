import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import SearchResultFilters from "../../../components/searchResults/Filter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchHomes } from "../../../data/homesSlice";
import PopularHomeCard from "../../../components/home/PopularHomesCard/PopularHomesCard";

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
      result.push(<PopularHomeCard key={home?.id} data={home} />);
    });
    return result;
  };
  return (
    <ScrollView style={{ backgroundColor: "#fafafa", paddingTop: 16, flex: 1 }}>
      {renderSearchResults()}
    </ScrollView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
