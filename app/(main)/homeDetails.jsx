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
import { COLORS, FONT, SIZES } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../../data/homesSlice";
import HomeRoomCard from "../../components/homeDetails/HomeRoomCard/HomeRoomCard";
import { MaterialIcons } from "@expo/vector-icons";
import HomeRooms from "../../components/homeDetails/HomeRooms/HomeRooms";
import HomeBaths from "../../components/homeDetails/HomeBaths/HomeBaths";
import HomeKitchens from "../../components/homeDetails/HomeKitchens/HomeKitchens";
import HomeAmenities from "../../components/homeDetails/HomeAmenities/HomeAmenities";
import HomeRestrictions from "../../components/homeDetails/HomeRestrictions/HomeRestrictions";
import {
  addFavoriteHome,
  removeFavoriteHome,
} from "../../data/userSlice/userSlice";

const HomeDetails = () => {
  const { id } = useSearchParams();
  const dispatch = useDispatch();

  const home = useSelector((state) => state.homes.showHome);
  console.log(home);
  useEffect(() => {
    dispatch(getHome(id));
  }, []);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  const liked = user?.homes?.some((item) => item.id === home.id);
  const handleFavorite = () => {
    if (liked) {
      dispatch(removeFavoriteHome(home?.id));
    } else {
      const data = { user_id: user?.id, home_id: home?.id };
      dispatch(addFavoriteHome(data));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={styles.detailsContainerHeader}>
            <View style={styles.detailsContainerDealInfo}>
              <Text style={styles.price}>
                {home?.deal_info?.total_price} افغانۍ
              </Text>
              <Text style={styles.dealType}>
                {home?.deal_info?.deal_type
                  ? home?.deal_info?.deal_type == "sale"
                    ? "خرڅلاو"
                    : "کرایه"
                  : ""}
              </Text>
            </View>
            <Text style={styles.title}>{home?.property?.name}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.detail}>
              <Text style={styles.label}>اطاقونه</Text>
              <Text style={styles.detailText}>{home?.home_rooms?.length} </Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.label}>حمامونه</Text>
              <Text style={styles.detailText}>{0} </Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.label}>پخلنځي</Text>
              <Text style={styles.detailText}>{0} </Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.label}>مساحت</Text>
              <Text style={styles.detailText}>{0} </Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionContainerTitle}>معلومات:</Text>
            <Text style={styles.description}>
              {home?.property?.description}
            </Text>
          </View>
        </View>
        <HomeRooms home_rooms={home?.home_rooms} />
        <HomeBaths home_baths={[]} />
        <HomeKitchens home_kitchens={[]} />
        <HomeAmenities amenities={home?.amenities} />
        <HomeRestrictions restrictions={home?.restrictions} />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleFavorite} style={styles.button}>
            <Text style={styles.buttonText}>
              {liked ? "خوښ شوی" : "خوښوول"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>اړیکه</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>نقشه</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    // padding: SIZES.large,
    backgroundColor: "white",
  },
  detailsContainerHeader: {
    padding: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.lightWhite,
    elevation: 3,
  },
  row: {
    padding: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  price: {
    fontSize: SIZES.medium,
    color: "#666",
    fontFamily: FONT.regular,
  },
  dealType: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
  },
  detail: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  label: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
  },
  detailText: {
    marginRight: 5,
    color: "#666",
  },
  descriptionContainer: {},
  descriptionContainerTitle: {
    fontFamily: FONT.regular,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: SIZES.small,
    elevation: 2,
  },
  description: {
    fontSize: SIZES.small,
    padding: SIZES.small,
  },
  buttonsContainer: {
    padding: SIZES.large,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
