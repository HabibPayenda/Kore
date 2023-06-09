import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SearchInput from "../../common/SearchInput/SearchInput";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeMessage = ({ name }) => {
  return (
    <LinearGradient colors={["#8489c2", "#7453a0"]} style={styles.container}>
      <Text style={styles.title}>ښه راغلاست {name}</Text>
      <Text style={styles.subTitle}>د څه په لټه کې یاست؟</Text>
      <SearchInput />
    </LinearGradient>
  );
};

export default WelcomeMessage;
