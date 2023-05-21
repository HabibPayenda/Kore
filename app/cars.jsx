import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "../styles/carsStyles";
import { CarOfferList } from "../components";

const Cars = () => {
  const handleFilter = () => {
    // handle filter functionality here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cars</Text>
        <TouchableOpacity onPress={handleFilter}>
          <Feather name="filter" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <CarOfferList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cars;
