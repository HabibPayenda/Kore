import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { COLORS, FONT, SIZES } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { setDealType } from "../../../data/appSlice/appSlice";

const DealTypeFilter = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRent = () => {
    dispatch(setDealType("rent"));
    navigation.goBack();
  };

  const handleGraw = () => {
    dispatch(setDealType("graw"));
    navigation.goBack();
  };
  const handleSale = () => {
    dispatch(setDealType("sale"));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.container}
      ></Pressable>
      <LinearGradient
        colors={["#7453a0", "#8489c2"]}
        style={styles.contentContainer}
      >
        <LinearGradient
          style={styles.titleConatainer}
          colors={["#fd8579", "#ff4d85"]}
        >
          <Text style={styles.title}>د معاملې بڼه انتخاب کړئ</Text>
        </LinearGradient>
        <View style={styles.filterItemsContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContentContainer}
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Pressable onPress={handleRent} style={styles.filterItem}>
              <Text style={styles.filterItemText}>کرایه</Text>
            </Pressable>
            <Pressable onPress={handleGraw} style={styles.filterItem}>
              <Text style={styles.filterItemText}>ګرو</Text>
            </Pressable>
            <Pressable onPress={handleSale} style={styles.filterItem}>
              <Text style={styles.filterItemText}>فروش</Text>
            </Pressable>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default DealTypeFilter;
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
