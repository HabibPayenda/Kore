import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./searchInputStyles";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../data/appSlice/appSlice";
import { useState } from "react";
import { useTypewriter } from "../../../utils";

const SearchInput = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const currentText = useTypewriter([
    placeholder,
    "دری اطاقه",
    "څلور اطاقه",
    "او یا هم پنځه اطاقه",
    "په دې ځای کې یې ولیکئ",
  ]);

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
