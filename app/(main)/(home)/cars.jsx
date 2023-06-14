import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useFocusEffect } from "expo-router";

import { PopularCarsList, SearchInput } from "../../../components";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SIZES } from "../../../constants";
import { getAllCars } from "../../../data/carsSlice/carsSlice";

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  const loading = useSelector((state) => state.cars.loading);

  useFocusEffect(
    useCallback(() => {
      if (cars?.length < 1) {
        dispatch(getAllCars());
      }
    }, [dispatch, cars])
  );

  const isLoading = () => {
    if (loading === "loading") {
      return <Text>Loading</Text>;
    } else {
      return (
        <>
          <PopularCarsList cars={cars} />
        </>
      );
    }
  };

  const inputPlaceholders = [
    "د خوښې موټر مو وپلټئ",
    "کرولا",
    "سراچه",
    "یا هم بنز",
    "په دې ځای کې یې ولیکئ",
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fafafa", alignItems: "center" }}
    >
      <View style={{ paddingBottom: 6 }}>
        <SearchInput
          screenUrl="(search)/searchResultsCars"
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

export default Cars;
