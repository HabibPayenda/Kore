import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeaderBtn from "../../common/header/ScreenHeaderBtn";
import { icons, images } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import HomeFilter from "../Filter/HomeFilter";
import { useNavigation } from "expo-router";

const HomeHeader = ({ setSidebarShown }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fafafa" }}>
      <LinearGradient colors={["#8489c2", "#7453a0"]} style={styles.container}>
        <View style={styles.containerTop}>
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          <ScreenHeaderBtn
            iconUrl={images.menu}
            handlePress={() => navigation.navigate("sidebar")}
            dimension="80%"
          />
        </View>
        <WelcomeMessage />
        <HomeFilter />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 0,
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    position: "relative",
    marginBottom: 32,
    backgroundColor: "white",
  },
  containerTop: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
