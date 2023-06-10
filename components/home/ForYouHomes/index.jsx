import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "./ForYouHomesStyles";
import PopularHomesCard from "../PopularHomesCard/PopularHomesCard";
import { useNavigation } from "expo-router";
import { SIZES } from "../../../constants";

const ForYouHomesList = ({ homes }) => {
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
        <Text style={styles.title}>ستاسو لپاره</Text>
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

export default ForYouHomesList;
