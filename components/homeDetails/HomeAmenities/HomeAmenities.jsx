import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT, SIZES, colors } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";

const HomeAmenities = ({ amenities }) => {
  const renderAmenities = () => {
    return amenities?.map((item) => {
      return (
        <View key={item.id} style={styles.amenityContainer}>
          <Text style={styles.amenityText} numberOfLines={3}>
            {item?.description}
          </Text>
          <Ionicons
            name="checkmark-circle-outline"
            size={SIZES.medium}
            color={COLORS.primary}
          />
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
      <LinearGradient colors={[colors.primary.main, colors.primary.dark1]}>
        <Text style={styles.title}>آسانتیاوې</Text>
      </LinearGradient>
      {amenities?.length > 0 ? (
        renderAmenities()
      ) : (
        <Text style={styles.notAvailable}>
          د دغه کور د آسانتیاوو په اړه معلومات نشته.
        </Text>
      )}
    </View>
  );
};

export default HomeAmenities;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  title: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: "#fafafa",
    elevation: 2,
    paddingHorizontal: SIZES.large,
  },
  notAvailable: {
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.xSmall,
  },

  amenityContainer: {
    paddingRight: SIZES.medium,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: 5,
    paddingVertical: 4,
  },

  amenityText: {
    width: "90%",
  },
});
