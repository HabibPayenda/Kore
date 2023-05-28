import React, { useState } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const handleLogout = async () => {
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "Login" }],
    // });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
        <Text style={styles.label}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationsToggle}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <View style={styles.logoutButtonContainer}>
          <MaterialCommunityIcons name="logout" size={24} color="white" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#ff5a5f",
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButtonText: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },
});

export default Settings;
