import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SIZES } from "../../../constants";
import { useNavigation } from "expo-router";

const HomeCard = ({ home }) => {
  const { home_rooms_count, image_url, city, deal_type, area, property } = home;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("homeDetails", home)}
      style={styles.container}
    >
      <Image
        source={{ uri: image_url }}
        style={styles.image}
        resizeMode="stretch"
        resizeMethod="resize"
      />
      <View style={styles.detailsContainer}>
        <LinearGradient
          colors={["#fd8579", "#ff4d85"]}
          style={styles.infoContainer}
        >
          <View style={styles.infoItem}>
            <Feather
              name="home"
              size={12}
              color="#fafafa"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{home_rooms_count}</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather
              name="square"
              size={12}
              color="#fafafa"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{area} sq ft</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather
              name="map-pin"
              size={12}
              color="#fafafa"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{city}</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather
              name="dollar-sign"
              size={12}
              color="#fafafa"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{deal_type}</Text>
          </View>
        </LinearGradient>
        <View style={styles.homeDetails}>
          <Text numberOfLines={3} style={styles.descriptionText}>
            {property?.description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    gap: 4,
    elevation: 2,
    borderRadius: 5,
  },
  image: {
    height: 110,
    width: 60,
    flex: 1,
    borderRadius: 5,
  },
  detailsContainer: {
    gap: 5,
    flex: 1,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    borderRadius: 5,
  },
  infoItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoText: {
    fontSize: SIZES.small,
    color: "#fafafa",
  },
  homeDetails: {
    flex: 2,
    paddingHorizontal: 2,
  },
  descriptionText: {
    fontSize: 12,
    textAlign: "right",
  },
});
