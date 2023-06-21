import { useFonts } from "expo-font";
import { COLORS } from "../constants";
import store from "../data";
import { Provider } from "react-redux";
import { Stack, SplashScreen, Slot } from "expo-router";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: true,
      shouldShowAlert: true,
    };
  },
});

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    BahijBaream: require("../assets/fonts/BahijBaraem-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
};

export default Layout;
