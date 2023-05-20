import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const WelcomeMessage = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ښه راغلاست {name}</Text>
    </View>
  );
};

export default WelcomeMessage;
