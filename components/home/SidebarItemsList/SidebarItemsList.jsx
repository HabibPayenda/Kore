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
import Animated from "react-native-reanimated";

import userImage from "../../../assets/images/user.jpg";
import { COLORS, FONT, SIZES } from "../../../constants";
import { useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { signOut } from "../../../data/userSlice/userSlice";

const data = [
  { title: "لومړۍ صفحه", icon: "home", link: "Home" },
  { title: "پروفایل", icon: "user", link: "userProfile" },
  { title: "تنظیمات", icon: "setting", link: "settings" },
  { title: "خبرتیاوې", icon: "notification", link: "notifications" },
  { title: "پیغامونه", icon: "message1", link: "Messages" },
];

const SidebarItemsList = ({ user }) => {
  const navigation = useNavigation();
  const [collapsed, setCollapsed] = React.useState(false);
  const toggleCollapse = () => setCollapsed(!collapsed);
  const dispatch = useDispatch();

  const renderMenuItem = (title, icon, link) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => navigation.navigate(link)}
    >
      <Text style={styles.menuItemText}>{title}</Text>
      <AntDesign name={icon} size={20} color={COLORS.secondary} />
    </TouchableOpacity>
  );

  const renderLinksSection = () => {
    const links = data.map(({ title, icon, link }) => (
      <ScrollView key={title}>{renderMenuItem(title, icon, link)}</ScrollView>
    ));

    return (
      <View>
        <TouchableOpacity style={styles.menuItem} onPress={toggleCollapse}>
          <Text style={styles.menuItemText}>لینکونه</Text>
          <AntDesign name="menu-fold" size={20} color={COLORS.secondary} />
        </TouchableOpacity>
        <Animated.View
          style={[styles.links, { height: collapsed ? 0 : links.length * 50 }]}
        >
          {links}
        </Animated.View>
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
        <Ionicons name="md-bulb" size={20} color={COLORS.secondary} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("Update")}
      >
        <Text style={styles.menuItemText}>اپډیټ</Text>
        <FontAwesome name="upload" size={20} color={COLORS.secondary} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={async () => {
          await AsyncStorage.removeItem("token");
          dispatch(signOut());
        }}
      >
        <Text style={styles.menuItemText}>وتل</Text>
        <AntDesign name="logout" size={20} color={COLORS.secondary} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.userProfile}>
        <Image source={userImage} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{"Habib Payenda"}</Text>
          <Text style={styles.userLocation}>{"Kabul, Afghanistan"}</Text>
        </View>
      </View>
      {renderLinksSection()}
      {renderMenuSection()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    height: "100%",
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.large,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    color: COLORS.secondary,
    fontSize: 16,
    fontFamily: FONT.regular,
  },
  userLocation: {
    color: COLORS.secondary,
    fontSize: 14,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 10,
    paddingRight: SIZES.xLarge,
  },
  menuItemText: {
    color: COLORS.secondary,
    fontSize: SIZES.small,
    marginRight: 10,
    fontFamily: FONT.regular,
  },
  links: {
    overflow: "hidden",
    marginBottom: 30,
    marginRight: SIZES.xLarge,
  },
});

export default SidebarItemsList;
