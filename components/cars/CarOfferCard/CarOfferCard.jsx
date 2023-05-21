import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./CarOfferCardStyles";

const CarOfferCard = ({ data }) => {
  const { make, model, year, fuel, price, discount_price } = data;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={data.image} />
      <View style={styles.footer}>
        <View style={styles.detailContainer}>
          <FontAwesome name="car" size={16} color="#333" style={styles.icon} />
          <Text style={styles.detailText}>
            {model} {make} {year}
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <FontAwesome name="tint" size={16} color="#333" style={styles.icon} />
          <Text style={styles.detailText}>{fuel}</Text>
        </View>
        <View style={styles.detailContainer}>
          <FontAwesome
            name="dollar"
            size={16}
            color="#333"
            style={styles.icon}
          />
          <Text style={styles.detailText}>{price}</Text>
        </View>
        <View style={styles.detailContainer}>
          <FontAwesome name="tags" size={16} color="#333" style={styles.icon} />
          <Text style={styles.detailText}>{discount_price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CarOfferCard;
