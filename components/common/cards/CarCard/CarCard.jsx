import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./CarCardStyles";

const CarCard = ({ data }) => {
  const { make, brand, year, fuel, price, deal, image } = data;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.footer}>
        <View style={styles.fullItem}>
          <View style={styles.item}>
            <Text style={styles.textTitle}>{"Camery"}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>{make}</Text>
          </View>
        </View>
        <View style={styles.fullItem}>
          <View style={styles.item}>
            <FontAwesome name="calendar" size={16} color="#666" />
            <Text style={styles.text}>{year}</Text>
          </View>
          <View style={styles.item}>
            <FontAwesome name="tint" size={16} color="#666" />
            <Text style={styles.text}>{"Petrol"}</Text>
          </View>
        </View>
        <View style={styles.fullItem}>
          <View style={styles.item}>
            <FontAwesome name="bolt" size={16} color="#666" />
            <Text style={styles.text}>{"Sale"}</Text>
          </View>
          <View style={styles.item}>
            <FontAwesome name="dollar" size={16} color="#666" />
            <Text style={styles.text}>{price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CarCard;
