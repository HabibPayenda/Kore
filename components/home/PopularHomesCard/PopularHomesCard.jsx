import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./PopularHomesCardStyles";

const PopularHomesCard = ({ data }) => {
  const { title, price, image, rooms, area, address, deal_type } = data;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.overlay}>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Feather name="home" size={16} color="#fff" style={styles.icon} />
            <Text style={styles.infoText}>{rooms}</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather name="square" size={16} color="#fff" style={styles.icon} />
            <Text style={styles.infoText}>{area} sq ft</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather
              name="map-pin"
              size={16}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{address}</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather
              name="dollar-sign"
              size={16}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{price}</Text>
          </View>
          <View style={styles.dealType}>
            <Text style={styles.dealTypeText}>{deal_type}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PopularHomesCard;
