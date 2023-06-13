import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { COLORS, FONT, PropertyTypes, SIZES } from "../../../constants";

const propertyFilter = () => {
  const navigation = useNavigation();

  const renderItems = () => {
    let items = [];
    for (let key in PropertyTypes) {
      items.push(
        <Pressable key={key} style={styles.filterItem}>
          <Text style={styles.filterItemText}>{PropertyTypes[key]}</Text>
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
        <Text style={styles.title}>د خوښې ملکیت مو انتخاب کړئ</Text>
        <View style={styles.filterItemsContainer}>{renderItems()}</View>
      </View>
    </SafeAreaView>
  );
};

export default propertyFilter;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ddd",
    borderTopWidth: 1,
  },
  title: {
    fontFamily: FONT.regular,
    color: COLORS.primary,
    alignSelf: "flex-end",
    fontSize: SIZES.small,
  },
  filterItemsContainer: {
    width: "80%",
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 12,
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
