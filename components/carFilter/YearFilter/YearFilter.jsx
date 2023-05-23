import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FONT, SIZES, YEARS } from "../../../constants";
import SearchInput from "../../common/SearchInput/SearchInput";
const YearFilter = () => {
  const [startYear, setStartYear] = useState("1992");
  const [open, setOpen] = useState(false);
  const [years, setYears] = useState(YEARS);
  const [openSecond, setOpenSecond] = useState(false);

  return (
    <View style={styles.container}>
      <SearchInput
        onChange={setStartYear}
        placeholder="لومړی کال"
        value={startYear}
      />
      <Text style={styles.label}>کال</Text>
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
  },
  label: {
    fontSize: SIZES.medium,
    marginBottom: 16,
    fontFamily: FONT.regular,
  },
});
export default YearFilter;
