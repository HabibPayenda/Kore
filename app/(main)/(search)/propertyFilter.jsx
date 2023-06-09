import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

const propertyFilter = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.container}
      ></Pressable>
      <View style={styles.contentContainer}>
        <Text>propertyFilter</Text>
      </View>
    </SafeAreaView>
  );
};

export default propertyFilter;

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
    borderColor: "#ddd",
    borderTopWidth: 1,
  },
});
