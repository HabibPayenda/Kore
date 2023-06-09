import { Stack } from "expo-router";
import SearchResultsHeader from "../../../components/searchResults/Header";

const Layout = () => {
  return (
    <Stack
      initialRouteName="searchResults"
      screenOptions={{
        animation: "slide_from_left",
        header: () => <SearchResultsHeader />,
      }}
    >
      <Stack.Screen
        name="searchResults"
        options={{
          animation: "slide_from_left",
        }}
      />
      <Stack.Screen
        name="locationFilter"
        options={{
          headerShown: false,
          animation: "slide_from_bottom",
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default Layout;
