import { Stack, Navigator, Slot, Tabs } from "expo-router";
import { TabRouter } from "@react-navigation/native";
import HomeHeader from "../../../components/home/Header/HomeHeader";

export default function Layout() {
  return (
    <Navigator router={TabRouter} initialRouteName="homes">
      <Navigator.Screen
        name="homes"
        options={{
          headerShown: false,
        }}
      />
      <Navigator.Screen
        name="cars"
        options={{
          headerShown: false,
        }}
      />
      <HomeHeader />
      <Slot />
    </Navigator>
  );
}
