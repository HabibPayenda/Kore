import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { COLORS, FONT } from "../../../constants";
import { KabulPlaces } from "../../../constants/places";

const locationFilter = () => {
  const navigation = useNavigation();
  const renderItems = () => {
    let items = [];
    for (let key in KabulPlaces) {
      items.push(
        <Pressable style={styles.filterItem}>
          <Text>{KabulPlaces[key]}</Text>
        </Pressable>
      );
    }
    return items;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.container}
      ></Pressable>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>موقعیت</Text>
        <View style={styles.filterItemsContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContentContainer}
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {renderItems()}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default locationFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: FONT.regular,
    color: COLORS.primary,
    alignSelf: "flex-end",
  },
  filterItemsContainer: {
    width: "80%",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    overflow: "hidden",
    marginVertical: 12,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },

  scrollViewContentContainer: {
    alignItems: "center",
    overflow: "hidden",
  },
  filterItem: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: "100%",
    backgroundColor: "#f1f1f1",
    borderColor: "#ddd",
    borderWidth: 1,
  },
});
