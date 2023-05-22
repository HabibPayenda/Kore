import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { COLORS, icons, images } from "../constants";
import { ScreenHeaderBtn } from "../components";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    BahijBaream: require("../assets/fonts/BahijBaraem-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
      <Stack.Screen
        name="cars"
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="carDetails"
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
