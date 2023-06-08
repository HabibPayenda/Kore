import { Stack } from "expo-router";

const FavoritesLayout = () => {
  return (
    <Stack
      initialRouteName="searchResults"
      screenOptions={{
        animation: "slide_from_left",
      }}
    ></Stack>
  );
};

export default FavoritesLayout;
