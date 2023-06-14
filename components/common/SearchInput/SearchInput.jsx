import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./searchInputStyles";
import { useNavigation, useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../data/appSlice/appSlice";
import { useState } from "react";
import { useTypewriter } from "../../../utils";

const SearchInput = ({ placeholder, screenUrl }) => {
  const [value, setValue] = useState("");
  const currentText = useTypewriter(placeholder);

  const dispatch = useDispatch();
  const router = useRouter();
  const handleSearch = () => {
    dispatch(setSearchTerm(value));
    router.push(screenUrl);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={currentText}
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
