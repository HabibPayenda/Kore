import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SearchInput from "../../common/SearchInput/SearchInput";

const WelcomeMessage = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ښه راغلاست {name}</Text>
      <Text style={styles.subTitle}>د څه په لټه کې یاست؟</Text>
      <SearchInput />
    </View>
  );
};

export default WelcomeMessage;
