import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./searchInputStyles";

const SearchInput = ({ value, placeholder, onChange }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="#ccc" style={styles.icon} />
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};

export default SearchInput;
