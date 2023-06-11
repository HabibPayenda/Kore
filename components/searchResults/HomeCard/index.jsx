import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const HomeCard = ({ home }) => {
  const { home_rooms, area, address, deal_type, deal_info, property } = home;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: property?.image_url }}
        style={styles.image}
        resizeMode="stretch"
        resizeMethod="resize"
      />
      <View style={styles.detailsContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Feather name="home" size={16} color="#333" style={styles.icon} />
            <Text style={styles.infoText}>{home_rooms?.length}</Text>
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
            <Text style={styles.infoText}>{deal_info?.deal_type}</Text>
          </View>
          <View style={styles.dealType}>
            <Text style={styles.dealTypeText}>{deal_type}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
  },
  image: {
    height: 110,
    width: 60,
    flex: 1,
  },
  detailsContainer: {
    gap: 5,
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
