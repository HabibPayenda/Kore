import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
import { useSearchParams } from "expo-router";
import { FONT, SIZES } from "../constants";

const HomeDetails = () => {
  const {
    images,
    title,
    price,
    beds,
    baths,
    sqft,
    description,
    onFavoritePress,
    onMessagePress,
  } = useSearchParams();

  return (
    <ScrollView style={styles.container}>
      <Swiper
        style={styles.slider}
        showsButtons={false}
        autoplay={true}
        loop={true}
      >
        <Text>hello</Text>
        <Text>hello</Text>
      </Swiper>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.detail}>
            <Icon name="bed" size={20} color="#666" />
            <Text style={styles.detailText}>{beds} Beds</Text>
          </View>
          <View style={styles.detail}>
            <Icon name="bath" size={20} color="#666" />
            <Text style={styles.detailText}>{baths} Baths</Text>
          </View>
          <View style={styles.detail}>
            <Icon name="square-o" size={20} color="#666" />
            <Text style={styles.detailText}>{sqft} Sqft</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            iusto repudiandae, hic doloribus eaque debitis aliquam accusamus
            magnam ducimus voluptate assumenda quasi totam dicta esse
            perspiciatis molestiae tenetur cum blanditiis!
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={onFavoritePress}>
            <Text style={styles.buttonText}>Add to Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onMessagePress}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    height: 250,
  },
  slide: {
    // flex: 1,
  },
  detailsContainer: {
    padding: SIZES.large,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    color: "#666",
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    marginLeft: 5,
    color: "#666",
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  description: {
    fontFamily: FONT.regular,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default HomeDetails;
