import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import styles from "./PopularHomesListStyles";
import PopularHomesCard from "../PopularHomesCard/PopularHomesCard";
import { useNavigation } from "expo-router";
import { SIZES } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";

const PopularHomesList = ({ homes }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate("homeDetails", item)}>
        <PopularHomesCard data={item} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ډېر لیدل شوي کورونه</Text>
      </View>
      <FlatList
        data={homes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          paddingVertical: SIZES.small,
        }}
        snapToInterval={200 + 10}
      />
    </View>
  );
};

export default PopularHomesList;
