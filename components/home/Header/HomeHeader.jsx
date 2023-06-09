import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeaderBtn from "../../common/header/ScreenHeaderBtn";
import { icons, images } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";

const HomeHeader = ({ setSidebarShown }) => {
  return (
    <SafeAreaView>
      <LinearGradient colors={["#8489c2", "#7453a0"]} style={styles.container}>
        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
        <ScreenHeaderBtn
          iconUrl={icons.menu}
          handlePress={() => setSidebarShown(true)}
          dimension="60%"
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
