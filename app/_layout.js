import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { COLORS } from "../constants";
import { Provider } from "react-redux";
import store from "../data";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

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
    <Provider store={store}>
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
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: true,
            headerTitle: "پیغامونه",
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
};

export default Layout;
