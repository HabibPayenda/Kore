import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
import { useSearchParams } from "expo-router";
import { COLORS, FONT, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../data/homesSlice";

const HomeDetails = () => {
  const { id } = useSearchParams();
  const dispatch = useDispatch();

  const home = useSelector((state) => state.homes.showHome);
  useEffect(() => {
    dispatch(getHome(id));
  }, []);

  console.log(home);
  return (
    <SafeAreaView>
      <ScrollView>
        <Swiper
          style={styles.slider}
          showsButtons={false}
          autoplay={true}
          loop={true}
        >
          <Image
            source={{ uri: home?.property?.image_url }}
            style={styles.image}
          />
          <Image
            source={{ uri: home?.property?.image_url }}
            style={styles.image}
          />
          <Image
            source={{ uri: home?.property?.image_url }}
            style={styles.image}
          />
        </Swiper>
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <Text style={styles.title}>{home?.property?.name}</Text>
            <Text style={styles.price}>{home?.deal_info?.total_price}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.detail}>
              <Text style={styles.detailText}>
                {home?.home_rooms?.length} اطاقونه
              </Text>
              <Icon name="bed" size={20} color="#666" />
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailText}>{0} Baths</Text>
              <Icon name="bath" size={20} color="#666" />
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailText}>{0} Sqft</Text>
              <Icon name="square-o" size={20} color="#666" />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.detail}>
              <Text style={styles.detailText}>
                {home?.home_rooms?.length} اطاقونه
              </Text>
              <Icon name="bed" size={20} color="#666" />
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailText}>{0} حمامونه</Text>
              <Icon name="bath" size={20} color="#666" />
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailText}>{0} Sqft</Text>
              <Icon name="square-o" size={20} color="#666" />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {home?.property?.description}
            </Text>
          </View>
          <View style={styles.roomsSection}>
            <Text style={styles.roomsTitle}>اطاقونه</Text>
            <Swiper
              style={styles.slider}
              showsButtons={false}
              autoplay={true}
              loop={true}
            >
              <Text>Room 1</Text>
              <Text>Room 2</Text>
            </Swiper>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    height: 250,
  },
  image: {
    flex: 1,
    height: 300,
    width: "100%",
    resizeMode: "cover",
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
    marginRight: 5,
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
  roomsTitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginBottom: SIZES.medium,
    color: COLORS.secondary,
  },
});

export default HomeDetails;
