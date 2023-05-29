import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./PopularHomesListStyles";
import PopularHomesCard from "../PopularHomesCard/PopularHomesCard";
import { useNavigation } from "expo-router";

const PopularHomesList = ({ homes }) => {
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
        data={homes}
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
