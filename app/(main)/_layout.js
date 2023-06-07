import { COLORS } from "../../constants";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
      <Stack.Screen
        name="cars"
        options={{
          headerShown: false,
        }}
      />
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
        name="favorites"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
