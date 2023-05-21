import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./PopularCarsListStyles";
import PopularCarsCard from "../PopularCarsCard/PopularCarsCard";

const DATA = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    price: "$20,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "2",
    make: "Honda",
    model: "Civic",
    price: "$18,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "3",
    make: "Ford",
    model: "Mustang",
    price: "$25,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "4",
    make: "Chevrolet",
    model: "Camaro",
    price: "$30,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "5",
    make: "Nissan",
    model: "Altima",
    price: "$22,000",
    image: require("../../../assets/images/car.jpg"),
  },
];

const PopularCarsList = () => {
  const handleViewAll = () => {
    // handle view all functionality here
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <PopularCarsCard data={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.link}>ټول</Text>
        </TouchableOpacity>
        <Text style={styles.title}>مشهور موټر</Text>
      </View>
      <FlatList
        data={DATA}
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
