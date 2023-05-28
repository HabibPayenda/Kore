import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./PopularHomesListStyles";
import PopularHomesCard from "../PopularHomesCard/PopularHomesCard";
import { useNavigation } from "expo-router";

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

  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("homeDetails", item)}
      >
        <PopularHomesCard data={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.link}>ټول</Text>
        </TouchableOpacity>
        <Text style={styles.title}>مشهور کورونه</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        snapToInterval={200 + 10}
      />
    </View>
  );
};

export default PopularHomesList;
