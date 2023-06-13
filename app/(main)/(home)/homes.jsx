import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";

import { PopularHomesList, SearchInput } from "../../../components";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHomes } from "../../../data/homesSlice";
import { getAllCars } from "../../../data/carsSlice/carsSlice";
import { getUser } from "../../../data/userSlice/userSlice";
import { SIZES } from "../../../constants";
import ForYouHomesList from "../../../components/home/ForYouHomes";

const Homes = () => {
  const dispatch = useDispatch();
  const homes = useSelector((state) => state.homes.homes);
  const token = useSelector((state) => state.user.token);
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.homes.loading);

  useEffect(() => {
    if (!token) {
      router.replace("(auth)/login");
    } else {
      dispatch(getUser(user?.id));
      // router.replace("(search)/homeRoomsFilter");
    }
  }, [token]);

  useFocusEffect(
    useCallback(() => {
      if (homes?.length < 1) {
        dispatch(getAllHomes());
      }
    }, [dispatch, homes])
  );

  // useEffect(() => {
  //   dispatch(getAllHomes());
  //   dispatch(getAllCars());
  // }, []);

  const isLoading = () => {
    if (loading === "loading") {
      return <Text>Loading</Text>;
    } else {
      return (
        <>
          <PopularHomesList homes={homes} />
          <ForYouHomesList homes={homes} />
        </>
      );
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fafafa", alignItems: "center" }}
    >
      <View style={{ paddingBottom: 6 }}>
        <SearchInput placeholder="د خوښې کور مو وپلټئ" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.medium,
          }}
        >
          {isLoading()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homes;
