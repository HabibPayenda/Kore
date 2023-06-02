import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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
          <MaterialCommunityIcons
            name="rectangle-outline"
            size={24}
            color="black"
          />
          <Text style={styles.icon}>{`${width} x ${length}`}</Text>
          <Feather name="sun" size={24} color="black" />
          <Text style={styles.icon}>
            {to_sun ? (
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="black"
              />
            ) : (
              "x"
            )}
          </Text>
          <MaterialCommunityIcons
            name="cupboard-outline"
            size={24}
            color="black"
          />
          <Text style={styles.icon}>
            {cupboard ? (
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="black"
              />
            ) : (
              "x"
            )}
          </Text>
          <MaterialCommunityIcons
            name="window-open-variant"
            size={24}
            color="black"
          />
          <Text style={styles.icon}>{`${windows}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    marginHorizontal: 10,
    marginVertical: 5,
    overflow: "hidden",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
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
