import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Suggestions = () => {
  const [suggestion, setSuggestion] = useState("");

  const handleSuggestionChange = (text) => {
    setSuggestion(text);
  };

  const handleSubmit = async () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave a suggestion</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your suggestion here"
        value={suggestion}
        onChangeText={handleSuggestionChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
});

export default Suggestions;
