import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONT, SIZES } from "../../../constants";
import AppTextInput from "../../common/AppTextInput/AppTextInput";
const YearFilter = () => {
  const [startYear, setStartYear] = useState("1992");
  const [endYear, setEndYear] = useState("2010");

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <AppTextInput
          onChange={setStartYear}
          placeholder="لومړی کال"
          value={startYear}
        />
        <Text style={styles.label}>لومړی کال</Text>
      </View>
      <View style={styles.item}>
        <AppTextInput
          onChange={setEndYear}
          placeholder="دوهم کال"
          value={endYear}
        />
        <Text style={styles.label}>دوهم کال</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    zIndex: 1000,
    flexDirection: "column",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
});
export default YearFilter;
