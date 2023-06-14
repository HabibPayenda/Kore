import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useFocusEffect } from "expo-router";

import { SearchInput } from "../../../components";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getAllHomes } from "../../../data/homesSlice";
import { SIZES } from "../../../constants";

const Lands = () => {
  const dispatch = useDispatch();
  const homes = [];
  const loading = "loading";

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
      return <></>;
    }
  };

  const inputPlaceholders = [
    "د خوښې ځمکه مو وپلټئ",
    "دوې بیسوې",
    "دری بیسوې",
    "یا هم یو جریب",
    "په دې ځای کې یې ولیکئ",
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fafafa", alignItems: "center" }}
    >
      <View style={{ paddingBottom: 6 }}>
        <SearchInput placeholder={inputPlaceholders} />
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

export default Lands;
