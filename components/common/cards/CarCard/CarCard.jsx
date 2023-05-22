import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./CarCardStyles";
import { useNavigation } from "expo-router";

const CarCard = ({ data }) => {
  const { make, brand, year, fuel, price, deal, image } = data;
  const navigation = useNavigation();
  const handleShow = () => {
    navigation.navigate("carDetails");
  };

  return (
    <TouchableOpacity onPress={handleShow}>
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
    </TouchableOpacity>
  );
};

export default CarCard;
