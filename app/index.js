import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useRootNavigationState, useRouter, useSegments } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { localSignIn } from "../data/userSlice/userSlice";

export default function Index() {
  const segments = useSegments();
  const router = useRouter();

  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();
  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch(localSignIn());
    }
  };
  const navigationState = useRootNavigationState();
  useEffect(() => {
    dispatch(localSignIn());
  }, []);
  useEffect(() => {
    if (!navigationState?.key) return;
    const inAuthGroup = segments[0] === "(auth)";

    if (token) {
      console.log("no Token in index");
      router.replace("(main)/home");
    } else {
      console.log("token in index");
      router.replace("(auth)/login");
    }
  }, [token, segments, navigationState?.key]);

  return (
    <View>{!navigationState?.key ? <Text>{token}</Text> : <View></View>}</View>
  );
}
