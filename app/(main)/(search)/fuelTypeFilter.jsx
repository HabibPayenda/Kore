import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { COLORS, FONT, SIZES, colors } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { setDealType, setFuelType } from "../../../data/appSlice/appSlice";

const FuelTypeFilter = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAll = () => {
    dispatch(setFuelType(""));
    navigation.goBack();
  };

  const handlePetrol = () => {
    dispatch(setFuelType("petrol"));
    navigation.goBack();
  };

  const handleDiesel = () => {
    dispatch(setFuelType("diesel"));
    navigation.goBack();
  };
  const handleElictric = () => {
    dispatch(setFuelType("elictric"));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.container}
      ></Pressable>
      <LinearGradient
        // colors={["#7453a0", "#8489c2"]}
        colors={[colors.primary.main, colors.primary.dark1]}
        style={styles.contentContainer}
      >
        <LinearGradient
          style={styles.titleConatainer}
          colors={["#fd8579", "#ff4d85"]}
        >
          <Text style={styles.title}>د تیلو بڼه انتخاب کړئ</Text>
        </LinearGradient>
        <View style={styles.filterItemsContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContentContainer}
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Pressable onPress={handleAll} style={styles.filterItem}>
              <Text style={styles.filterItemText}>ټول</Text>
            </Pressable>
            <Pressable onPress={handlePetrol} style={styles.filterItem}>
              <Text style={styles.filterItemText}>پطرول</Text>
            </Pressable>
            <Pressable onPress={handleDiesel} style={styles.filterItem}>
              <Text style={styles.filterItemText}>ډیزل</Text>
            </Pressable>
            <Pressable onPress={handleElictric} style={styles.filterItem}>
              <Text style={styles.filterItemText}>برقی</Text>
            </Pressable>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default FuelTypeFilter;
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  titleConatainer: {
    position: "absolute",
    top: -13,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  title: {
    fontFamily: FONT.regular,
    color: "#fafafa",
    fontSize: SIZES.small,
  },
  filterItemsContainer: {
    width: "80%",
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 12,
    backgroundColor: "#fafafa",
  },
  scrollView: {
    width: "100%",
  },

  scrollViewContentContainer: {
    alignItems: "center",
    overflow: "hidden",
  },
  filterItem: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    width: "100%",
    backgroundColor: "#fafafa",
    borderColor: "#eee",
    borderWidth: 1,
  },
  filterItemText: {
    color: COLORS.gray,
  },
});
