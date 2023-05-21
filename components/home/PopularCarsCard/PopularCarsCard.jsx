import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./PopularCarsCardStyles";

const PopularCarsCard = ({ data }) => {
  const { make, model, year, fuel, price, image } = data;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.footer}>
        <View style={styles.item}>
          <FontAwesome name="car" size={16} color="#333" />
          <Text style={styles.text}>{model}</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome name="cog" size={16} color="#333" />
          <Text style={styles.text}>{make}</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome name="calendar" size={16} color="#333" />
          <Text style={styles.text}>{year}</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome name="tint" size={16} color="#333" />
          <Text style={styles.text}>{fuel}</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome name="money" size={16} color="#333" />
          <Text style={styles.text}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default PopularCarsCard;
