import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeFilter = () => {
  return (
    <View style={styles.container}>
      <Text>HomeFilter</Text>
    </View>
  );
};

export default HomeFilter;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -20,
  },
});
