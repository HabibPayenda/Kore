import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { COLORS } from "../constants";

const Notifications = () => {
  const navigation = useNavigation();

  const handleFilter = () => {
    navigation.navigate("carFilter");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}></ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default Notifications;
