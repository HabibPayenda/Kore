import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./searchInputStyles";
import { useNavigation } from "expo-router";

const SearchInput = ({ value, placeholder, onChange, onClick }) => {
  const navigation = useNavigation();
  const handleSearch = () => {
    navigation.navigate("searchResults");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        textAlign="right"
        onSubmitEditing={() => handleSearch()}
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
