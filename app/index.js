import { useEffect } from "react";
import { View, Text } from "react-native";
import {
  Redirect,
  useRootNavigationState,
  useRouter,
  useSegments,
} from "expo-router";
import { useSelector } from "react-redux";

export default function Index() {
  const segments = useSegments();
  const router = useRouter();
  const token = useSelector((state) => state.user.token);
  //   const token = "jjkdf";
  const navigationState = useRootNavigationState();
  useEffect(() => {
    if (!navigationState?.key) return;
    const inAuthGroup = segments[0] === "auth";

    if (!token) {
      router.replace("/auth/login");
    } else if (token) {
      router.replace("/home");
    }
    return undefined;
  }, [token, segments, navigationState?.key]);

  return (
    <View>{!navigationState?.key ? <Text>Loading</Text> : <View></View>}</View>
  );
}
