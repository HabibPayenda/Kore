import React from "react";
import { View, TextInput } from "react-native";
import styles from "./appTextInputStyles";

const AppTextInput = ({ value, placeholder, onChange, onClick }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        textAlign="right"
      />
    </View>
  );
};

export default AppTextInput;
