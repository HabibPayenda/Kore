import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useRouter } from "expo-router";

import {
  PopularCarsList,
  PopularHomesList,
  SearchInput,
} from "../../../components";
import Sidebar from "../../../components/home/Sidebar/Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHomes } from "../../../data/homesSlice";
import { getAllCars } from "../../../data/carsSlice/carsSlice";
import { getUser } from "../../../data/userSlice/userSlice";
import { COLORS, SIZES } from "../../../constants";

const Homes = () => {
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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fafafa", alignItems: "center" }}
    >
      <View style={{ paddingBottom: 6 }}>
        <SearchInput />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.medium,
          }}
        >
          <PopularHomesList homes={homes} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homes;
