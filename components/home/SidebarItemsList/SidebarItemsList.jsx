import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

import userImage from "../../../assets/images/user.jpg";
import { COLORS } from "../../../constants";

const data = [
  { title: "Home", icon: "home", link: "Home" },
  { title: "Profile", icon: "user", link: "Profile" },
  { title: "Settings", icon: "setting", link: "Settings" },
  { title: "Notifications", icon: "notification", link: "Notifications" },
  { title: "Messages", icon: "message1", link: "Messages" },
];

const SidebarItemsList = ({ user }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const toggleCollapse = () => setCollapsed(!collapsed);

  const renderMenuItem = (title, icon, link) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => console.log(link)}>
      <AntDesign name={icon} size={20} color={COLORS.secondary} />
      <Text style={styles.menuItemText}>{title}</Text>
    </TouchableOpacity>
  );

  const renderLinksSection = () => {
    const links = data.map(({ title, icon, link }) => (
      <View key={title}>{renderMenuItem(title, icon, link)}</View>
    ));

    return (
      <View>
        <TouchableOpacity style={styles.menuItem} onPress={toggleCollapse}>
          <AntDesign name="menu-fold" size={20} color={COLORS.secondary} />
          <Text style={styles.menuItemText}>Links</Text>
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
        onPress={() => console.log("Suggestions")}
      >
        <Ionicons name="md-bulb" size={20} color={COLORS.secondary} />
        <Text style={styles.menuItemText}>Suggestions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("Update")}
      >
        <FontAwesome name="upload" size={20} color={COLORS.secondary} />
        <Text style={styles.menuItemText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("Logout")}
      >
        <AntDesign name="logout" size={20} color={COLORS.secondary} />
        <Text style={styles.menuItemText}>Logout</Text>
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
    // flex: 1,
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    height: "100%",
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    color: COLORS.secondary,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  userLocation: {
    color: COLORS.secondary,
    fontSize: 14,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  menuItemText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  collapsed: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 10,
  },
  collapsedText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  links: {
    overflow: "hidden",
    marginBottom: 30,
  },
});

export default SidebarItemsList;
