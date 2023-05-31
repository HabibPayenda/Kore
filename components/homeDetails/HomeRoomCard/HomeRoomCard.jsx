import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import homeImage from "../../../assets/images/home.jpg";

const HomeRoomCard = ({ room }) => {
  const { width, length, to_sun, cupboard, windows, imageUrl } = room;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={imageUrl ? { uri: imageUrl } : homeImage}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.icon}>{`${width} x ${length}`}</Text>
          <Text style={styles.label}>Dimensions</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>{to_sun ? "☀️" : "⛅️"}</Text>
          <Text style={styles.label}></Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>{cupboard ? "🚪" : "❌"}</Text>
          <Text style={styles.label}>المارۍ</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>{`${windows} 🪟`}</Text>
          <Text style={styles.label}>Windows</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    overflow: "hidden",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 150,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  label: {
    fontSize: 18,
  },
});

export default HomeRoomCard;
