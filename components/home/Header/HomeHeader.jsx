import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeaderBtn from "../../common/header/ScreenHeaderBtn";
import { icons, images } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import HomeFilter from "../Filter/HomeFilter";

const HomeHeader = ({ setSidebarShown }) => {
  return (
    <SafeAreaView>
      <LinearGradient colors={["#8489c2", "#7453a0"]} style={styles.container}>
        <View style={styles.containerTop}>
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          <ScreenHeaderBtn
            iconUrl={images.menu}
            handlePress={() => setSidebarShown(true)}
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
    justifyContent: "space-around",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    position: "relative",
    marginBottom: 28,
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