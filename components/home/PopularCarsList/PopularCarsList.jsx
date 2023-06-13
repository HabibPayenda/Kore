import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";

import styles from "./PopularCarsListStyles";
import PopularCarsCard from "../PopularCarsCard/PopularCarsCard";
import { useNavigation } from "expo-router";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const PopularCarsList = ({ cars }) => {
  const navigation = useNavigation();
  const handleViewAll = () => {
    // handle view all functionality here
    navigation.navigate("cars");
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("carDetails", { id: item.id })}
      >
        <View style={styles.item}>
          <PopularCarsCard data={item} />
        </View>
      </Pressable>
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
