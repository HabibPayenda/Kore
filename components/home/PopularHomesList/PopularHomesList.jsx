import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./PopularHomesListStyles";

const data = [
  {
    id: 1,
    title: "Cozy Studio Apartment",
    price: "$100/night",
    image: require("../../../assets/images/home.jpg"),
  },
  {
    id: 2,
    title: "Spacious 1BR Apartment",
    price: "$150/night",
    image: require("../../../assets/images/home.jpg"),
  },
  {
    id: 3,
    title: "Luxury 2BR Condo",
    price: "$200/night",
    image: require("../../../assets/images/home.jpg"),
  },
  {
    id: 4,
    title: "Charming Cottage",
    price: "$120/night",
    image: require("../../../assets/images/home.jpg"),
  },
  {
    id: 5,
    title: "Modern 3BR House",
    price: "$250/night",
    image: require("../../../assets/images/home.jpg"),
  },
];

const PopularHomesList = () => {
  const handleViewAll = () => {
    console.log("View All");
  };

  const renderItem = ({ item }) => <View>{item.title}</View>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Homes</Text>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.link}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularHomesList;
