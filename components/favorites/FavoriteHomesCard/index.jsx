import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

const FavoriteHomesCard = ({ home }) => {
  const { title, price, image_url, rooms, area, address, deal_type, property } =
    home;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: property?.image_url }}
        style={styles.image}
        resizeMode="stretch"
        resizeMethod="resize"
      />
      <View style={styles.infoContainer}>
        <Text>{home?.property?.name}</Text>
        <View style={styles.detailsContainer}>
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
            <Text style={styles.infoText}>{address}</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather
              name="dollar-sign"
              size={16}
              color="#333"
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

export default FavoriteHomesCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    height: 180,
    width: Dimensions.get("window").width - 40,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: COLORS.lightWhite,
  },
  image: {
    height: 100,
    width: 100,
    flex: 1,
  },
  infoContainer: {
    flex: 1,
  },
  detailsContainer: {
    flexDirection: "row",
  },
});
