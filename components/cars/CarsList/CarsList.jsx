import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./CarsListStyles";
import CarCard from "../../common/cards/CarCard/CarCard";

const CarsList = ({ DATA, title }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <CarCard data={item} />
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
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
