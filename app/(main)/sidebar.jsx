import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { COLORS } from "../../constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SidebarItemsList from "../../components/home/SidebarItemsList/SidebarItemsList";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

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
        <View style={[styles.sidebar]}>
          <SidebarItemsList />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
  },
  backgroundContainer: {
    height: Dimensions.get("window").height - StatusBar.length,
    width: Dimensions.get("window").width,
    backgroundColor: COLORS.lightWhite,
    position: "absolute",
    opacity: 0.8,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    right: 0,
    width: Dimensions.get("window").width - 100,
    height: Dimensions.get("window").height - 20,
    backgroundColor: "gray",
    marginTop: 40,
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
