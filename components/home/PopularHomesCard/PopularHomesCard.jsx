import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./PopularHomesCardStyles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../constants";
import { checkImageURL } from "../../../utils";
import imagePlaceholder from "../../../assets/images/imagePlaceholder.png";

const PopularHomeCard = ({ data }) => {
  const { rooms, area, address, deal_type, deal_info, property } = data;

  return (
    <View style={styles.container}>
      <Image
        source={
          checkImageURL(property?.image_url)
            ? { uri: property?.image_url }
            : imagePlaceholder
        }
        style={styles.image}
        resizeMode="stretch"
        resizeMethod="resize"
      />
      <LinearGradient
        colors={[colors.primary.main, colors.primary.dark1]}
        style={styles.footer}
      >
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Feather name="home" size={16} color="#333" style={styles.icon} />
            <Text style={styles.infoText}>{rooms}</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather name="square" size={16} color="#333" style={styles.icon} />
            <Text style={styles.infoText}>{area} sq ft</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather
              name="map-pin"
              size={16}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{address?.city}</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather
              name="dollar-sign"
              size={16}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{deal_info?.total_price}</Text>
          </View>
          <View style={styles.dealType}>
            <Text style={styles.dealTypeText}>{deal_type}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PopularHomeCard;
