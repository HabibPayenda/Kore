import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONT, colors } from "../../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import SearchResultFilters from "../../Filter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../../../data/appSlice/appSlice";
import SearchResultCarsFilters from "../../Filter/CarsFilter";

const SearchResultsCarsHeader = () => {
  const searchTerm = useSelector((state) => state.app.searchTerm);
  const [value, setValue] = useState(searchTerm);
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(setSearchTerm(value));
  };
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // colors={["#8489c2", "#7453a0"]}
        colors={[colors.primary.main, colors.primary.dark1]}
        style={styles.contentContainer}
      >
        <View style={styles.containerTop}>
          <View style={styles.containerTopLeft}>
            <Text style={styles.title}>د خوښې موټر مو پیدا کړئ</Text>
            <TextInput
              style={styles.input}
              value={value}
              onSubmitEditing={() => handleSearch()}
              onChangeText={(value) => setValue(value)}
              placeholder="د څه په لټه کې یاست؟"
            />
          </View>
          <Pressable style={styles.backIcon} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fafafa" />
          </Pressable>
        </View>
        <SearchResultCarsFilters />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SearchResultsCarsHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    alignItems: "center",
    gap: 0,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    position: "relative",
    paddingBottom: 52,
    backgroundColor: "white",
  },
  containerTop: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  containerTopLeft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    gap: 12,
  },
  title: {
    fontFamily: FONT.regular,
    color: "#fafafa",
    marginTop: 24,
  },
  input: {
    backgroundColor: "#fafafa",
    height: 25,
    elevation: 1,
    padding: 0,
    paddingHorizontal: 12,
    textAlign: "right",
    width: "80%",
    elevation: 1,
    borderRadius: 12,
  },
  backIcon: {
    transform: [{ rotate: "180deg" }],
    alignSelf: "flex-start",
    position: "absolute",
    right: 24,
    top: 12,
  },
});
