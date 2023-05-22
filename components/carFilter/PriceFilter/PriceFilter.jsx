import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
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
        <Text style={styles.label}>${lowestPrice}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default PriceFilter;
