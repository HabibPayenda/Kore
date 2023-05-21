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
        <View style={styles.brand}>
          <View style={styles.fullItem}>
            <Text style={styles.model}>{model}</Text>
          </View>
          <View style={styles.fullItem}>
            <Text style={styles.make}>{make}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <FontAwesome name="calendar" size={16} color="#333" />
          <Text style={styles.text}>{2012}</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome name="tint" size={16} color="#333" />
          <Text style={styles.text}>{"Petrol"}</Text>
        </View>
        <View style={styles.item}>
          <FontAwesome name="money" size={16} color="#333" />
          <Text numberOfLines={1} style={styles.text}>
            {price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PopularCarsCard;
