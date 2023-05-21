import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./CarsListStyles";

const CarsList = ({ DATA, title }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.make}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        horizontal
      />
    </View>
  );
};

export default CarsList;
