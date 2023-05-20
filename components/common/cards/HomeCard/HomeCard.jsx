import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const HomeCard = ({ imageSource, title, address, price }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text numberOfLines={1} style={styles.cardTitle}>
          {title}
        </Text>
        <Text style={styles.cardAddress}>{address}</Text>
        <Text style={styles.cardPrice}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
  },
  cardImage: {
    height: 200,
    width: "100%",
  },
  cardDetails: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  cardAddress: {
    fontSize: 16,
    marginBottom: 8,
    color: "#666",
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff5a5f",
  },
});

export default HomeCard;
