import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Slot, Stack, useRouter } from "expo-router";

import {
  PopularCarsList,
  PopularHomesList,
  ScreenHeaderBtn,
  WelcomeMessage,
} from "../../../components";
import Sidebar from "../../../components/home/Sidebar/Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHomes } from "../../../data/homesSlice";
import { getAllCars } from "../../../data/carsSlice/carsSlice";
import { getUser } from "../../../data/userSlice/userSlice";
import { LinearGradient } from "expo-linear-gradient";
import HomeHeader from "../../../components/home/Header/HomeHeader";
import { COLORS, SIZES } from "../../../constants";

const Home = () => {
  const [sidebarShown, setSidebarShown] = useState(false);
  const dispatch = useDispatch();
  const homes = useSelector((state) => state.homes.homes);
  const cars = useSelector((state) => state.cars.cars);
  const token = useSelector((state) => state.user.token);
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (!token) {
      router.replace("(auth)/login");
    } else {
      dispatch(getUser(user?.id));
      // router.replace("(search)/priceFilter");
    }
  }, [token]);

  useEffect(() => {
    dispatch(getAllHomes());
    dispatch(getAllCars());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Sidebar show={sidebarShown} setShow={setSidebarShown} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          {/* <PopularHomesList homes={homes} />
          <PopularCarsList cars={cars} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
