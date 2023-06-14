import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";

import styles from "./PopularCarsListStyles";
import { useNavigation } from "expo-router";
import CarCard from "../../common/cards/CarCard/CarCard";
import { useMemo } from "react";

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

  const shouldItemUpdate = (prevItem, nextItem) => {
    return prevItem.data !== nextItem.data;
  };

  const memoizedCars = useMemo(() => {
    return cars.map((car) => ({
      ...car,
      data: JSON.stringify(car),
    }));
  }, [cars]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ډیر لیدل شوي موټر </Text>
      </View>
      <FlatList
        data={memoizedCars}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        removeClippedSubviews={true}
        initialNumToRender={2}
        maxToRenderPerBatch={4}
        inverted
        shouldItemUpdate={shouldItemUpdate}
      />
    </View>
  );
};

export default PopularCarsList;
