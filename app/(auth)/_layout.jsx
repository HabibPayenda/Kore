import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      initialRouteName="favoriteHomes"
      screenOptions={{
        animation: "slide_from_left",
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="signUp" />
    </Stack>
  );
};

export default AuthLayout;
