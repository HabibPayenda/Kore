import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import styles from "../styles/carDetailsStyles";
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { getCar } from "../data/carsSlice/carsSlice";
import CarDetailsSkeleton from "../components/skeletons/carDetailsSkeleton";
const CarDetails = () => {
  const params = useSearchParams();
  const car = useSelector((state) => state.cars.showCar);
  const loading = useSelector((state) => state.cars.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCar(params?.id));
  }, []);
  const renderItem = ({ item }) => {
    return <Image source={{ uri: item }} style={styles.image} />;
  };

  const navigation = useNavigation();

  const hanldeMessage = () => {
    navigation.navigate("chat");
  };

  if (loading == "loading") {
    return <CarDetailsSkeleton />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Carousel
          data={[car?.image_url]}
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
              <Text style={styles.companyText}>{car?.brand}</Text>
            </View>
            <View style={styles.middleItem}>
              <Text style={styles.nameText}>{car?.model}</Text>
            </View>
            <View style={styles.itemsGroup}>
              <View style={styles.item}>
                <FontAwesome name="tint" size={16} color="#666" />
                <Text style={styles.text}>{car?.fuel_type}</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="calendar" size={16} color="#666" />
                <Text style={styles.text}>{car?.year}</Text>
              </View>
            </View>
            <View style={styles.itemsGroup}>
              <View style={styles.item}>
                <FontAwesome name="map-marker" size={16} color="#666" />
                <Text style={styles.text}>{car?.address?.city}</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="bolt" size={16} color="#666" />
                <Text style={styles.text}>{car?.deal_info?.deal_type}</Text>
              </View>
            </View>
            <View style={styles.priceItem}>
              <FontAwesome
                name="dollar"
                size={SIZES.large}
                color={COLORS.lightWhite}
              />
              <Text style={styles.priceText}>
                {car?.deal_info?.total_price}
              </Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                {car?.property?.description}
              </Text>
            </View>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="heart-o" size={SIZES.small} color="#fff" />
              <Text style={styles.buttonText}>خوښول</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={hanldeMessage}>
              <FontAwesome name="envelope-o" size={SIZES.small} color="#fff" />
              <Text style={styles.buttonText}>اړیکه</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default CarDetails;
