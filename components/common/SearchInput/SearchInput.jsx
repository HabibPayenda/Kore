import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./searchInputStyles";
import { useNavigation } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  setSearchTermCaller,
} from "../../../data/appSlice/appSlice";
import { useState } from "react";

const SearchInput = ({ placeholder, onChange, onClick }) => {
  const [value, setValue] = useState();

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(setSearchTerm(value));
    navigation.navigate("(search)");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={(value) => setValue(value)}
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
