import { Stack } from "expo-router";

const FavoritesLayout = () => {
  return (
    <Stack
      initialRouteName="favoriteHomes"
      screenOptions={{
        animation: "slide_from_left",
      }}
    >
      <Stack.Screen name="favoriteHomes" />
      <Stack.Screen name="favoriteCars" />
    </Stack>
  );
};

export default FavoritesLayout;
