import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import HomeRoomCard from "../HomeRoomCard/HomeRoomCard";
import { COLORS, FONT, SIZES } from "../../../constants";

export default function HomeBaths({ home_baths }) {
  return (
    <View style={styles.roomsSection}>
      <Text style={styles.roomsTitle}>حمامونه</Text>
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
        <Text>دغه کور حمامونه نه لري</Text>
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
    marginBottom: SIZES.medium,
    color: COLORS.secondary,
    backgroundColor: COLORS.lightWhite,
    elevation: 2,
    paddingHorizontal: SIZES.large,
  },
  roomsSlider: {
    height: 280,
  },
});
