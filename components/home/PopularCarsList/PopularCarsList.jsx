import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";

import styles from "./PopularCarsListStyles";
import { useNavigation } from "expo-router";
import CarCard from "../../common/cards/CarCard/CarCard";

const PopularCarsList = ({ cars }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("carDetails", { id: item.id })}
      >
        <View style={styles.item}>
          <CarCard data={item} />
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ډیر لیدل شوي موټر </Text>
      </View>
      <FlatList
        data={cars}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default PopularCarsList;
