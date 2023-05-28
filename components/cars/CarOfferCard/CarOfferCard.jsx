import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./CarOfferCardStyles";

const CarOfferCard = ({ data }) => {
  const { make, model, year, fuel, price, discount_price } = data;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={data.image} />
      <View style={styles.footer}>
        <View style={styles.detailContainerTop}>
          <View style={styles.item}>
            <FontAwesome
              name="car"
              size={16}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.text}>{model}</Text>
          </View>
          <View style={styles.item}>
            <FontAwesome name="calendar" size={16} color="#333" />
            <Text style={styles.text}>{2012}</Text>
          </View>
          <View style={styles.item}>
            <FontAwesome name="tint" size={16} color="#333" />
            <Text style={styles.text}>{"Petrol"}</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.item}>
            <FontAwesome
              name="dollar"
              size={16}
              color="#333"
              style={styles.icon}
            />
            <Text
              style={[
                styles.detailText,
                {
                  textDecorationLine: "underline line-through",
                  textDecorationColor: "red",
                },
              ]}
            >
              {price}
            </Text>
          </View>
          <View style={styles.item}>
            <FontAwesome
              name="tags"
              size={16}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.detailText}>{12000}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CarOfferCard;
