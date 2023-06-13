import React, { useMemo } from "react";
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

  const shouldItemUpdate = (prevItem, nextItem) => {
    return prevItem.data !== nextItem.data;
  };

  const memoizedHomes = useMemo(() => {
    return homes.map((home) => ({
      ...home,
      data: JSON.stringify(home),
    }));
  }, [homes]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ستاسو لپاره</Text>
      </View>
      <FlatList
        data={memoizedHomes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        initialNumToRender={2}
        maxToRenderPerBatch={4}
        inverted
        contentContainerStyle={{
          gap: 10,
          paddingVertical: SIZES.small,
        }}
        shouldItemUpdate={shouldItemUpdate}
        snapToInterval={200 + 10}
      />
    </View>
  );
};

export default ForYouHomesList;
