import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  PopularCarsList,
  PopularHomesList,
  ScreenHeaderBtn,
  WelcomeMessage,
} from "../components";
import styles from "../styles/search";
const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <WelcomeMessage name={"حبیب"} />
          <PopularHomesList />
          <PopularCarsList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
