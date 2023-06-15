import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";

import { PopularHomesList, SearchInput } from "../../../components";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHomes } from "../../../data/homesSlice";
import { getUser } from "../../../data/userSlice/userSlice";
import { SIZES } from "../../../constants";
import ForYouHomesList from "../../../components/home/ForYouHomes";
import * as Notifications from "expo-notifications";

const Homes = () => {
  const dispatch = useDispatch();
  const homes = useSelector((state) => state.homes.homes);
  const token = useSelector((state) => state.user.token);
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.homes.loading);

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  async function registerForPushNotificationsAsync() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Failed to get push token for push notifications!");
      return;
    }

    const { data: pushToken } = await Notifications.getExpoPushTokenAsync({
      projectId: "6cd50489-3a11-4f77-8a8d-93c5ca58bdf8",
    });
    console.log(pushToken);
  }

  useEffect(() => {
    if (!token) {
      router.replace("(auth)/login");
    } else {
      dispatch(getUser(user?.id));
      // router.replace("/_sitemap");
    }
  }, [token]);

  useFocusEffect(
    useCallback(() => {
      if (homes?.length < 1) {
        dispatch(getAllHomes());
      }
    }, [dispatch, homes])
  );

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

  const inputPlaceholders = [
    "د خوښې کور مو وپلټئ",
    "دوه اطاقه",
    "دری اطاقه",
    "یا هم شپږ اطاقه",
    "په دې ځای کې یې ولیکئ",
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fafafa", alignItems: "center" }}
    >
      <View style={{ paddingBottom: 6 }}>
        <SearchInput
          screenUrl="(search)/searchResults"
          placeholder={inputPlaceholders}
        />
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
