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
import Sidebar from "../components/home/Sidebar/Sidebar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHomes } from "../data/homesSlice";
const Home = () => {
  const router = useRouter();
  const [sidebarShown, setSidebarShown] = useState(false);
  const dispatch = useDispatch();
  const homes = useSelector((state) => state.homes.homes);
  console.log(homes);
  useEffect(() => {
    dispatch(getAllHomes());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Sidebar show={sidebarShown} setShow={setSidebarShown} />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerShown: !sidebarShown,
          headerLeft: () =>
            sidebarShown ? null : (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
          headerRight: () =>
            sidebarShown ? (
              <ScreenHeaderBtn
                iconUrl={icons.chevronRight}
                handlePress={() => setSidebarShown(false)}
                dimension="60%"
              />
            ) : (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                handlePress={() => setSidebarShown(true)}
                dimension="60%"
              />
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
