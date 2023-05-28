import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./PopularCarsCardStyles";

const PopularCarsCard = ({ data }) => {
  const { make, model, year, fuel, price, image } = data;

  return (
    <View style={styles.container}>
      <Image source={{ uri: data?.image_url }} style={styles.image} />
      <View style={styles.footer}>
        <View style={styles.brand}>
          <View style={styles.fullItem}>
            <Text style={styles.model}>{data?.brand}</Text>
          </View>
          <View style={styles.fullItem}>
            <Text style={styles.make}>{make}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <FontAwesome name="calendar" size={16} color="#333" />
          <Text style={styles.text}>{data?.year}</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome name="tint" size={16} color="#333" />
          <Text style={styles.text}>{data?.fuel_type}</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome name="money" size={16} color="#333" />
          <Text numberOfLines={1} style={styles.text}>
            {data?.deal_info?.total_price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PopularCarsCard;
