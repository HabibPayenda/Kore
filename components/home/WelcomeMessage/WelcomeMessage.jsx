import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SearchInput from "../../common/SearchInput/SearchInput";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeMessage = ({ name }) => {
  return (
    // <LinearGradient colors={["#fd8579", "#ff4d85"]} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>ښه راغلاست {name}</Text>
      <Text style={styles.subTitle}>د څه په لټه کې یاست؟</Text>
    </View>
    // </LinearGradient>
  );
};

export default WelcomeMessage;
