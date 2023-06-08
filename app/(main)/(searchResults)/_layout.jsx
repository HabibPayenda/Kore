import { Stack } from "expo-router";

const SearchResultsLayout = () => {
  return (
    <Stack
      initialRouteName="searchResults"
      screenOptions={{
        animation: "slide_from_left",
      }}
    ></Stack>
  );
};

export default SearchResultsLayout;
