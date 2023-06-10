import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { COLORS } from "../../constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SidebarItemsList from "../../components/home/SidebarItemsList/SidebarItemsList";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const Sidebar = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ zIndex: 101 }}>
      <View style={[styles.container]}>
        <View style={[styles.backgroundContainer]}>
          <TouchableWithoutFeedback onPress={() => router.back()}>
            <View style={[{ height: "100%", width: "100%" }]}></View>
          </TouchableWithoutFeedback>
        </View>
        <LinearGradient
          colors={["#8489c2", "#7453a0"]}
          style={[styles.sidebar]}
        >
          <SidebarItemsList />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
  },
  backgroundContainer: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "absolute",
    opacity: 0.8,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    right: 0,
    width: Dimensions.get("window").width - 100,
    height: Dimensions.get("window").height,
    borderColor: "#fafafa",
    borderLeftWidth: 1,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Sidebar;
