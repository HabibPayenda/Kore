import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import UserImage from "../UserImage/UserImage";
import { Ionicons } from "@expo/vector-icons";

const UserProfileHeader = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: "#fafafa" }}>
      <LinearGradient
        colors={[colors.primary.main, colors.primary.dark1]}
        style={styles.container}
      >
        <View style={styles.containerTop}>
          <UserImage />
          <Pressable style={styles.backIcon} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fafafa" />
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default UserProfileHeader;

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
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  backIcon: {
    transform: [{ rotate: "180deg" }],
    alignSelf: "flex-start",
    position: "absolute",
    right: 24,
    top: 12,
  },
});
