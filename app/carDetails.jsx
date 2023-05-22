import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import styles from "../styles/carDetailsStyles";
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const CarDetails = () => {
  const data = {
    id: "5",
    make: "Nissan",
    model: "Altima",
    year: "2022",
    price: "22,000",
    fuel: "Petrol",
    deal: "Sale",
    address: "Kabul",
    images: [
      require("../assets/images/car.jpg"),
      require("../assets/images/car.jpg"),
      require("../assets/images/car.jpg"),
    ],
  };
  const { make, model, fuel, price, year, address, deal, images } = data;
  const renderItem = ({ item }) => {
    return <Image source={item} style={styles.image} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        itemHeight={300}
        sliderHeight={300}
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
        style={{ height: 300 }}
        contentContainerStyle={{ height: 300 }}
      />
      <ScrollView>
        <View style={styles.details}>
          <View style={styles.middleItem}>
            <Text style={styles.companyText}>{make}</Text>
          </View>
          <View style={styles.middleItem}>
            <Text style={styles.nameText}>{model}</Text>
          </View>
          <View style={styles.itemsGroup}>
            <View style={styles.item}>
              <FontAwesome name="tint" size={16} color="#666" />
              <Text style={styles.text}>{fuel}</Text>
            </View>
            <View style={styles.item}>
              <FontAwesome name="calendar" size={16} color="#666" />
              <Text style={styles.text}>{year}</Text>
            </View>
          </View>
          <View style={styles.itemsGroup}>
            <View style={styles.item}>
              <FontAwesome name="map-marker" size={16} color="#666" />
              <Text style={styles.text}>{address}</Text>
            </View>
            <View style={styles.item}>
              <FontAwesome name="bolt" size={16} color="#666" />
              <Text style={styles.text}>{deal}</Text>
            </View>
          </View>
          <View style={styles.priceItem}>
            <FontAwesome
              name="dollar"
              size={SIZES.large}
              color={COLORS.lightWhite}
            />
            <Text style={styles.priceText}>{price}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ipsa, culpa fugit dicta quam provident ducimus voluptatibus velit
              alias dolores ratione ea placeat. Illo vitae, illum temporibus ut
              sapiente nam.
            </Text>
          </View>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="heart-o" size={SIZES.small} color="#fff" />
            <Text style={styles.buttonText}>Add to Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="envelope-o" size={SIZES.small} color="#fff" />
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarDetails;
