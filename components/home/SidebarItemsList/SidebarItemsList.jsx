import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import userImage from "../../../assets/images/user.jpg";
import { COLORS, FONT, SIZES } from "../../../constants";
import { useNavigation, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { signOut } from "../../../data/userSlice/userSlice";
import { Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const data = [
  { title: "پروفایل", icon: "user", link: "userProfile" },
  { title: "تنظیمات", icon: "setting", link: "settings" },
  { title: "خبرتیاوې", icon: "notification", link: "notifications" },
  { title: "خوښ شوي", icon: "heart", link: "(favorites)" },
  { title: "پیغامونه", icon: "message1", link: "Messages" },
];

const SidebarItemsList = () => {
  const navigation = useNavigation();
  const [collapsed, setCollapsed] = React.useState(false);
  const toggleCollapse = () => setCollapsed(!collapsed);
  const dispatch = useDispatch();
  const router = useRouter();

  const renderMenuItem = (title, icon, link) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => navigation.navigate(link)}
    >
      <Text style={styles.menuItemText}>{title}</Text>
      <AntDesign name={icon} size={20} color="#7453a0" />
    </TouchableOpacity>
  );

  const renderLinksSection = () => {
    const links = data.map(({ title, icon, link }) => (
      <ScrollView key={title}>{renderMenuItem(title, icon, link)}</ScrollView>
    ));

    return (
      <View>
        <View style={[styles.links]}>{links}</View>
      </View>
    );
  };

  const renderMenuSection = () => (
    <View>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("suggestion")}
      >
        <Text style={styles.menuItemText}>پیشنهادونه</Text>
        <Ionicons name="md-bulb" size={20} color="#7453a0" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("Update")}
      >
        <Text style={styles.menuItemText}>اپډیټ</Text>
        <FontAwesome name="upload" size={20} color="#7453a0" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={async () => {
          await AsyncStorage.removeItem("token");
          dispatch(signOut());
        }}
      >
        <Text style={styles.menuItemText}>وتل</Text>
        <AntDesign name="logout" size={20} color="#7453a0" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#fd8579", "#ff4d85"]}
        style={styles.userProfile}
      >
        <Image source={userImage} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{"Habib Payenda"}</Text>
          <Text style={styles.userLocation}>{"Kabul, Afghanistan"}</Text>
        </View>
        <Pressable style={styles.backIcon} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fafafa" />
        </Pressable>
      </LinearGradient>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.menu}>
        {renderLinksSection()}
        {renderMenuSection()}
        <LinearGradient
          // colors={["#8489c2", "#7453a0"]}
          colors={["#fd8579", "#ff4d85"]}
          style={styles.menuBottom}
        >
          <Text style={styles.logoText}>کور</Text>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.large,
    position: "relative",
    borderBottomLeftRadius: 25,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    color: "#fafafa",
    fontSize: 16,
    fontFamily: FONT.regular,
  },
  backIcon: {
    transform: [{ rotate: "180deg" }],
    alignSelf: "flex-start",
    position: "absolute",
    right: 12,
    top: 12,
  },
  userLocation: {
    color: "#fafafa",
    fontSize: 14,
  },
  menu: {
    width: "80%",
    backgroundColor: "#fafafa",
    alignSelf: "flex-end",
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 5,
    paddingRight: SIZES.xLarge,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    borderTopWidth: 0.5,
  },
  menuItemText: {
    color: "#7453a0",
    fontSize: SIZES.small,
    marginRight: 10,
    fontFamily: FONT.regular,
  },
  links: {
    overflow: "hidden",
    marginBottom: 30,
  },
  menuBottom: {
    flex: 1,
    height: 100,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge,
    color: "#fafafa",
  },
});

export default SidebarItemsList;
