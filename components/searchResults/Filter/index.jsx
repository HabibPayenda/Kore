import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, FONT } from "../../../constants";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const SearchResultFilters = () => {
  const dealType = useSelector((state) => state.app.dealType);
  const numberOfRooms = useSelector((state) => state.app.numberOfRooms);

  let dealTypeText = "";
  switch (dealType) {
    case "rent":
      dealTypeText = "کرایه";
      break;
    case "graw":
      dealTypeText = "ګرو";
      break;
    case "sale":
      dealTypeText = "فروش";
      break;
    default:
      dealTypeText = "معامله";
  }

  let numberOfRoomsText = "";
  if (numberOfRooms === null) {
    numberOfRoomsText = "اطاقونه";
  } else {
    numberOfRoomsText = `${numberOfRooms} اطاقه`;
  }
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("priceFilter")}>
        <LinearGradient
          style={styles.filterItem}
          colors={["#fd8579", "#ff4d85"]}
        >
          <FontAwesome5 name="chevron-down" size={12} color="#fafafa" />
          <Text style={styles.filterItemText}>قیمت</Text>
        </LinearGradient>
      </Pressable>
      <Pressable onPress={() => router.push("homeRoomsFilter")}>
        <LinearGradient
          style={styles.filterItem}
          colors={["#fd8579", "#ff4d85"]}
        >
          <FontAwesome5 name="chevron-down" size={12} color="#fafafa" />
          <Text style={styles.filterItemText}>{numberOfRoomsText}</Text>
        </LinearGradient>
      </Pressable>
      <Pressable onPress={() => router.push("dealTypeFilter")}>
        <LinearGradient
          style={styles.filterItem}
          colors={["#fd8579", "#ff4d85"]}
        >
          <FontAwesome5 name="chevron-down" size={12} color="#fafafa" />
          <Text style={styles.filterItemText}>{dealTypeText}</Text>
        </LinearGradient>
      </Pressable>
      <Pressable onPress={() => router.push("locationFilter")}>
        <LinearGradient
          style={styles.filterItem}
          colors={["#fd8579", "#ff4d85"]}
        >
          <FontAwesome5 name="chevron-down" size={12} color="#fafafa" />
          <Text style={styles.filterItemText}>ځای</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default SearchResultFilters;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    gap: 12,
    flexDirection: "row",
    position: "absolute",
    bottom: -20,
  },
  contentContainer: {},
  filterItem: {
    paddingHorizontal: 8,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    borderRadius: 6,
    elevation: 6,
  },
  filterItem1: {
    backgroundColor: "#00a7fa",
  },
  filterItem2: {
    backgroundColor: "#ff9633",
  },
  filterItem3: {
    backgroundColor: "#6722ff",
  },
  filterItemText: {
    fontFamily: FONT.regular,
    fontSize: 12,
    color: "#fafafa",
  },
});
