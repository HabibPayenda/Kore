import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./CarOffersListStyles";
import CarOfferCard from "../CarOfferCard/CarOfferCard";
const DATA = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    price: "$20,000",
    discount: "Save $2,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "2",
    make: "Honda",
    model: "Civic",
    price: "$18,000",
    discount: "Save $1,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "3",
    make: "Ford",
    model: "Mustang",
    price: "$25,000",
    discount: "Save $3,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "4",
    make: "Chevrolet",
    model: "Camaro",
    price: "$30,000",
    discount: "Save $4,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "5",
    make: "Nissan",
    model: "Altima",
    price: "$22,000",
    discount: "Save $2,500",
    image: require("../../../assets/images/car.jpg"),
  },
];

const CarOfferList = () => {
  const handleViewAll = () => {
    // handle view all functionality here
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <CarOfferCard data={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.link}>ټول</Text>
        </TouchableOpacity>
        <Text style={styles.title}>تخفیفونه</Text>
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

export default CarOfferList;
