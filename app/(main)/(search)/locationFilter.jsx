import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { COLORS, FONT, SIZES, colors } from "../../../constants";
import { KabulPlaces } from "../../../constants/places";
import { LinearGradient } from "expo-linear-gradient";

const locationFilter = () => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");
  const renderItems = () => {
    let items = [];
    for (let key in KabulPlaces) {
      if (searchTerm !== "") {
        if (KabulPlaces[key].includes(searchTerm)) {
          items.push(
            <Pressable key={key} style={styles.filterItem}>
              <Text style={styles.filterItemText}>{KabulPlaces[key]}</Text>
            </Pressable>
          );
        }
      } else {
        items.push(
          <Pressable key={key} style={styles.filterItem}>
            <Text style={styles.filterItemText}>{KabulPlaces[key]}</Text>
          </Pressable>
        );
      }
    }
    return items;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.container}
      ></Pressable>
      <LinearGradient
        // colors={["#7453a0", "#8489c2"]}
        colors={[colors.primary.main, colors.primary.dark1]}
        style={styles.contentContainer}
      >
        <LinearGradient
          style={styles.titleConatainer}
          colors={["#fd8579", "#ff4d85"]}
        >
          <Text style={styles.title}>د خوښې ځای مو انتخاب کړئ</Text>
        </LinearGradient>
        <TextInput
          value={searchTerm}
          onChangeText={(value) => setSearchTerm(value)}
          style={styles.input}
          placeholder="د ځای پلټنه"
        />
        <View style={styles.filterItemsContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContentContainer}
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {renderItems()}
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default locationFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  titleConatainer: {
    position: "absolute",
    top: -13,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  title: {
    fontFamily: FONT.regular,
    color: "#fafafa",
    fontSize: SIZES.small,
  },
  filterItemsContainer: {
    width: "80%",
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    overflow: "hidden",
    marginVertical: 12,
    backgroundColor: "#fafafa",
  },
  input: {
    backgroundColor: "#f5f5f5",
    height: 30,
    elevation: 1,
    padding: 0,
    paddingHorizontal: 12,
    textAlign: "right",
    width: "80%",
    marginTop: 12,
    borderRadius: 5,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },

  scrollViewContentContainer: {
    alignItems: "center",
    overflow: "hidden",
  },
  filterItem: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    width: "100%",
    backgroundColor: "#fafafa",
    borderColor: "#eee",
    borderWidth: 1,
  },
  filterItemText: {
    color: COLORS.gray,
  },
});
