import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import homeImage from "../../../assets/images/home.jpg";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONT, SIZES } from "../../../constants";

const HomeRoomCard = ({ room }) => {
  const { width, length, to_sun, cupboard, windows, imageUrl, color } = room;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={imageUrl ? { uri: imageUrl } : homeImage}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <View style={styles.item}>
            <Text style={styles.label}>مساحت</Text>
            <Text style={styles.icon}>{`${width} x ${length}`}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>لمر</Text>
            <Text style={styles.icon}>
              {to_sun ? (
                <Ionicons
                  name="checkmark-circle-outline"
                  size={SIZES.medium}
                  color="black"
                />
              ) : (
                <AntDesign
                  name="closecircleo"
                  size={SIZES.medium}
                  color="black"
                />
              )}
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>المارۍ</Text>
            <Text style={styles.icon}>
              {cupboard ? (
                <Ionicons
                  name="checkmark-circle-outline"
                  size={SIZES.medium}
                  color="black"
                />
              ) : (
                <AntDesign
                  name="closecircleo"
                  size={SIZES.medium}
                  color="black"
                />
              )}
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>کړکۍ</Text>
            <Text style={styles.icon}>{`${windows}`}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>رنګ</Text>
            <View
              style={{
                backgroundColor: color,
                width: 15,
                height: 15,
                borderRadius: 4,
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    marginHorizontal: 10,
    marginVertical: 5,
    overflow: "hidden",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {},
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#fff",
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    gap: 3,
    borderColor: "#ddd",
    borderRightWidth: 1,
    paddingVertical: 3,
  },
  icon: {
    fontSize: SIZES.medium,
  },
  label: {
    fontSize: 18,
  },
});

export default HomeRoomCard;
