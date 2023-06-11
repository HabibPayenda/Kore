import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SidebarItemsList from "../../components/home/SidebarItemsList/SidebarItemsList";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Sidebar = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ zIndex: 101, flex: 1 }}>
      <View style={[styles.container]}>
        <View style={[styles.backgroundContainer]}>
          <TouchableWithoutFeedback onPress={() => router.back()}>
            <View style={[{ height: "100%", width: "100%" }]}></View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.sidebar}>
          <SidebarItemsList />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    flex: 1,
  },
  backgroundContainer: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "absolute",
    opacity: 0.8,
  },
  sidebar: {
    alignSelf: "flex-end",
    flex: 1,
    width: Dimensions.get("window").width - 100,
    height: Dimensions.get("window").height,
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
