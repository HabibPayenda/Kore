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
        <View style={styles.infoHeaderContainer}>
          <Text>{home?.property?.name}</Text>
          <Text>{home?.property?.description}</Text>
          <View
            style={[
              styles.availabilityCircle,
              {
                backgroundColor:
                  home?.property?.availability_status === "available"
                    ? "green"
                    : red,
              },
            ]}
          ></View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.infoItem}>
            <Feather name="home" size={16} color="#333" style={styles.icon} />
            <Text style={styles.infoText}>{"4"}</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather name="square" size={16} color="#333" style={styles.icon} />
            <Text style={styles.infoText}>{120}</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather
              name="dollar-sign"
              size={16}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{"7000"}</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather name="book" size={16} color="#333" style={styles.icon} />
            <Text style={styles.dealTypeText}>{"کرایه"}</Text>
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
    height: 120,
    width: Dimensions.get("window").width - 40,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: COLORS.lightWhite,
    borderRadius: 5,
    overflow: "hidden",
    elevation: 3,
    gap: 5,
    margin: 10,
  },
  image: {
    height: "100%",
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    height: "100%",
    paddingVertical: 5,
    width: "100%",
  },
  infoHeaderContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 5,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  availabilityCircle: {
    height: 10,
    width: 10,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    paddingRight: 5,
  },
  infoItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
