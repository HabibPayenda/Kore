import SearchResultsHeader from "../../components/searchResults/Header";
import { COLORS } from "../../constants";
import { Slot, Stack } from "expo-router";

const Layout = () => {
  return (
    <>
      <Stack initialRouteName="(home)">
        <Stack.Screen name="(home)" options={{ headerShown: false }} />

        <Stack.Screen
          name="carDetails"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="chat"
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: true,
            headerTitle: "پیغامونه",
          }}
        />
        <Stack.Screen
          name="homeDetails"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(favorites)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(search)"
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
        />
        <Stack.Screen
          name="sidebar"
          options={{
            headerShown: false,
            presentation: "transparentModal",
            animation: "slide_from_right",
          }}
        />
      </Stack>
    </>
  );
};

export default Layout;
