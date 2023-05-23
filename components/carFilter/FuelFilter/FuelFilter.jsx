import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
const FuelFilter = () => {
  const [selectedFuelType, setSelectedFuelType] = useState("Petrol");
  const [open, setOpen] = useState(false);
  const [fuelTypes, setFuelTypes] = useState([
    { label: "پطرول", value: "Petrol" },
    { label: "ډیزل", value: "Diesel" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>د تیلو بڼه:</Text>
      <DropDownPicker
        open={open}
        value={selectedFuelType}
        items={fuelTypes}
        setOpen={setOpen}
        setValue={setSelectedFuelType}
        setItems={setFuelTypes}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    zIndex: 1000,
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
export default FuelFilter;
