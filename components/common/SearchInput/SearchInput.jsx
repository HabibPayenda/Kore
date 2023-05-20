import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./searchInputStyles";

const SearchInput = ({ value, placeholder, onChange, onClick }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        textAlign="right"
      />
      <Feather
        name="search"
        onClick={() => {}}
        size={24}
        color="#ccc"
        style={styles.icon}
      />
    </View>
  );
};

export default SearchInput;
