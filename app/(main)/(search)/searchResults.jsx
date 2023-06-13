import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchHomes } from "../../../data/homesSlice";
import HomeCard from "../../../components/searchResults/HomeCard";
import { setDealType, setNumberOfRooms } from "../../../data/appSlice/appSlice";

const SearchResults = () => {
  const searchTerm = useSelector((state) => state.app.searchTerm);
  const dealType = useSelector((state) => state.app.dealType);
  const searchResults = useSelector((state) => state.homes.searchResults);
  const numberOfRooms = useSelector((state) => state.app.numberOfRooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDealType(""));
    dispatch(setNumberOfRooms(null));
  }, [searchTerm]);

  useEffect(() => {
    dispatch(searchHomes({ searchTerm, dealType, numberOfRooms }));
  }, [searchTerm, dealType, numberOfRooms]);

  console.log(searchResults);
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
  contentContainer: {
    gap: 12,
    paddingHorizontal: 12,
  },
});
