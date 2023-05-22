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

const Sidebar = ({ show }) => {
  const translateX = useSharedValue(Dimensions.get("window").width + 10);
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(show ? 0 : translateX.value, {
          duration: 300,
        }),
      },
    ],
  }));

  const opacityStyles = useAnimatedStyle(() => ({
    opacity: withTiming(show ? 1 : opacity.value),
  }));

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[styles.backgroundContainer, animatedStyle]}
      ></Animated.View>
      <Animated.View style={[styles.sidebar, animatedStyle]}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
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
    padding: 20,
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
