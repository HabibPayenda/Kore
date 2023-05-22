import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { COLORS } from "../../../constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SidebarItemsList from "../SidebarItemsList/SidebarItemsList";

const Sidebar = ({ show, setShow }) => {
  const translateX = useSharedValue(Dimensions.get("window").width + 10);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(show ? 0 : translateX.value, {
          duration: 300,
        }),
      },
    ],
  }));

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.backgroundContainer, animatedStyle]}>
        <TouchableWithoutFeedback onPress={() => setShow(false)}>
          <View style={[{ height: "100%", width: "100%" }]}></View>
        </TouchableWithoutFeedback>
      </Animated.View>
      <Animated.View style={[styles.sidebar, animatedStyle]}>
        <SidebarItemsList />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
  },
  backgroundContainer: {
    height: Dimensions.get("window").height,
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
    height: Dimensions.get("window").height,
    backgroundColor: "gray",
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
