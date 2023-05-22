import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { COLORS, FONT, SIZES } from "../../../constants";
/*
 A component that allows users to choose a price range using a slider.
 */
const PriceFilter = ({ onPriceChange }) => {
  const [lowestPrice, setLowestPrice] = useState(1);
  const [highestPrice, setHighestPrice] = useState(50000);
  /*
   A function to update the lowest price based on the slider value.
   */
  const handlePriceChange = (value) => {
    setLowestPrice(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderItem}>
        <Text style={styles.label}>
          {lowestPrice}
          {"  "}
          {lowestPrice > 1 ? "لکه" : "لک"}
        </Text>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={10}
            step={1}
            value={lowestPrice}
            onValueChange={(value) => handlePriceChange(value)}
          />

          <Text style={styles.title}>ټیټه بیه:</Text>
        </View>
      </View>
      <View style={styles.sliderItem}>
        <Text style={styles.label}>
          {highestPrice}
          {"  "}
          {highestPrice > 1 ? "لکه" : "لک"}
        </Text>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={lowestPrice}
            maximumValue={20}
            step={1}
            value={highestPrice}
            onValueChange={(value) => setHighestPrice(value)}
          />

          <Text style={styles.title}>لوړه بیه:</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.xLarge,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: FONT.regular,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: FONT.regular,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  sliderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    height: 80,
    width: 300,
  },
});

export default PriceFilter;
