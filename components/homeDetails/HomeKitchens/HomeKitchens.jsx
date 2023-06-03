import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import HomeRoomCard from "../HomeRoomCard/HomeRoomCard";
import { COLORS, FONT, SIZES } from "../../../constants";

export default function HomeKitchens({ home_kitchens }) {
  return (
    <View style={styles.roomsSection}>
      <Text style={styles.roomsTitle}>آشپزخانې</Text>
      {home_kitchens?.length > 0 ? (
        <Swiper
          style={styles.roomsSlider}
          showsButtons={false}
          autoplay={true}
          loop={true}
        >
          {home_kitchens?.map((room) => (
            <HomeRoomCard room={room} key={room?.id} />
          ))}
        </Swiper>
      ) : (
        <Text style={styles.notAvailable}>
          د دغه کور د آشپزخانو په اړه معلومات نشته.
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
    marginBottom: SIZES.medium,
    color: COLORS.secondary,
    backgroundColor: COLORS.lightWhite,
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