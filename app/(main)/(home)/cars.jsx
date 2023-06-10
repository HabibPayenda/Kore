import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "../../../styles/carsStyles";
import { CarOfferList, CarsList } from "../../../components";
import { useNavigation } from "expo-router";

const DATA = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: "2021",
    price: "$20,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "2",
    make: "Honda",
    model: "Civic",
    year: "2022",
    price: "$18,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "3",
    make: "Ford",
    model: "Mustang",
    year: "2020",
    price: "$25,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "4",
    make: "Chevrolet",
    model: "Camaro",
    year: "2021",
    price: "$30,000",
    image: require("../../../assets/images/car.jpg"),
  },
  {
    id: "5",
    make: "Nissan",
    model: "Altima",
    year: "2022",
    price: "$22,000",
    image: require("../../../assets/images/car.jpg"),
  },
];
const Cars = () => {
  const navigation = useNavigation();

  const handleFilter = () => {
    navigation.navigate("(main)/carFilter");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleFilter}>
          <Feather name="filter" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>موټر</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <CarOfferList />
        <CarsList DATA={DATA} title="ټیټ ماډل" />
        <CarsList DATA={DATA} title="مابینی ماډل" />
        <CarsList DATA={DATA} title="لوړ ماډل" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cars;
