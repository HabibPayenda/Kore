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
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <PriceFilter />
        <FuelFilter />
        <View style={styles.filterSection}>
          {/* Add your year filter component here */}
        </View>
        {/* Filter button */}
      </View>
      <TouchableOpacity style={styles.filterButton} onPress={filterCars}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollContainer}>
        {filteredCars?.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  filterContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
    flex: 1,
  },
  filterSection: {
    flex: 1,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: "#00f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    color: "#fff",
  },
  scrollContainer: {
    flex: 1,
  },
});

export default CarFilter;
