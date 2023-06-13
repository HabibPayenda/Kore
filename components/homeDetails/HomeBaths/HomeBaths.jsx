import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import HomeRoomCard from "../HomeRoomCard/HomeRoomCard";
import { COLORS, FONT, SIZES, colors } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeBaths({ home_baths }) {
  return (
    <View style={styles.roomsSection}>
      <LinearGradient colors={[colors.primary.main, colors.primary.dark1]}>
        <Text style={styles.roomsTitle}>حمامونه</Text>
      </LinearGradient>
      {home_baths?.length > 0 ? (
        <Swiper
          style={styles.roomsSlider}
          showsButtons={false}
          autoplay={true}
          loop={true}
        >
          {home_baths?.map((room) => (
            <HomeRoomCard room={room} key={room?.id} />
          ))}
        </Swiper>
      ) : (
        <Text style={styles.notAvailable}>
          د دغه کور د حمامونه په اړه معلومات نشته.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  roomsSection: {
    backgroundColor: "white",
  },
  roomsTitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: "#fafafa",
    elevation: 2,
    paddingHorizontal: SIZES.large,
  },
  roomsSlider: {
    height: 280,
  },
  notAvailable: {
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.xSmall,
  },
});
