import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import SkeletonPlaceholder from "expo-react-native-skeleton-placeholder";
import { SIZES } from "../../constants";
const CarDetailsSkeleton = () => {
  return (
    <SafeAreaView>
      <SkeletonPlaceholder borderRadius={4}>
        <View style={styles.container}>
          <View style={styles.imageContainer} />
          <View style={styles.detailsContainer}>
            <View style={styles.detailsHeader}>
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
              <View style={styles.item} />
            </View>
            <View style={styles.detailsContent}>
              <Text style={styles.detailsText} />
            </View>
          </View>
        </View>
      </SkeletonPlaceholder>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.large,
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },
  detailsHeader: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    gap: SIZES.large,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "30%",
    height: 30,
  },
  detailsContent: {
    flex: 4,
    padding: SIZES.large,
    height: "100%",
    width: "100%",
  },
  detailsText: {
    height: "100%",
    width: "100%",
  },
});

export default CarDetailsSkeleton;
