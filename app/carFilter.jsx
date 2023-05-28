import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { CarCard } from "../components";
import PriceFilter from "../components/carFilter/PriceFilter/PriceFilter";
import FuelFilter from "../components/carFilter/FuelFilter/FuelFilter";
import YearFilter from "../components/carFilter/YearFilter/YearFilter";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONT } from "../constants";

const CarFilter = ({ cars }) => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [priceRange, setPriceRange] = useState(null);
  const [fuel, setFuel] = useState(null);
  const [year, setYear] = useState(null);

  const filterCars = () => {
    let filtered = cars;

    if (priceRange) {
      filtered = filtered.filter(
        (car) =>
          car.price >= priceRange.minPrice && car.price <= priceRange.maxPrice
      );
    }

    if (fuel) {
      filtered = filtered.filter((car) => car.fuelType === fuel);
    }

    if (year) {
      filtered = filtered.filter((car) => car.year === year);
    }

    setFilteredCars(filtered);
  };

  const handlePriceRangeChange = (minPrice, maxPrice) => {
    setPriceRange({ minPrice, maxPrice });
  };

  const handleFuelChange = (fuelType) => {
    setFuel(fuelType);
  };

  const handleYearChange = (year) => {
    setYear({ year });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.filterContainer}>
          <PriceFilter />
          <FuelFilter />
          <YearFilter />
          <View style={styles.filterSection}></View>
        </View>
        <TouchableOpacity style={styles.filterButton} onPress={filterCars}>
          <Text style={styles.filterButtonText}>لټون</Text>
        </TouchableOpacity>
        <View style={styles.scrollContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  filterContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
    flex: 1,
    alignItems: "center",
  },
  filterSection: {
    flex: 1,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 5,
    alignItems: "center",
    width: 100,
    alignSelf: "flex-end",
  },
  filterButtonText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.regular,
  },
  scrollContainer: {
    flex: 1,
  },
});

export default CarFilter;
