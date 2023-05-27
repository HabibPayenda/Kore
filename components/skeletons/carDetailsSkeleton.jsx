import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import SkeletonPlaceholder from "expo-react-native-skeleton-placeholder";
const CarDetailsSkeleton = () => {
  return (
    <SafeAreaView>
      <SkeletonPlaceholder borderRadius={4}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View style={styles.imageContainer} />
          <View style={{ marginLeft: 20 }}>
            <Image style={{ width: 120, height: 20 }} />
            <Text style={{ marginTop: 6, fontSize: 14, lineHeight: 18 }}>
              Hello world
            </Text>
          </View>
        </View>
      </SkeletonPlaceholder>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 300,
  },
});

export default CarDetailsSkeleton;
