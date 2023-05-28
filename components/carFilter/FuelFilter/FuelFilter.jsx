import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FONT, SIZES } from "../../../constants";
const FuelFilter = () => {
  const [selectedFuelType, setSelectedFuelType] = useState("Petrol");
  const [open, setOpen] = useState(false);
  const [fuelTypes, setFuelTypes] = useState([
    { label: "پطرول", value: "Petrol" },
    { label: "ډیزل", value: "Diesel" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={selectedFuelType}
        items={fuelTypes}
        setOpen={setOpen}
        setValue={setSelectedFuelType}
        setItems={setFuelTypes}
        style={{ width: 100 }}
        containerStyle={{ width: 230 }}
      />
      <Text style={styles.label}>د تیلو بڼه:</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    zIndex: 1000,
    flexDirection: "row",
    zIndex: 10000,
  },
  label: {
    fontSize: SIZES.medium,
    marginBottom: 16,
    fontFamily: FONT.regular,
  },
});
export default FuelFilter;
