import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import userImage from "../../assets/images/user.jpg";
import UserImage from "../../components/userProfile/UserImage/UserImage";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Name:</Text>
        <Text style={styles.fieldValue}>{user?.name}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Email:</Text>
        <Text style={styles.fieldValue}>{user?.email}</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Phone:</Text>
        <Text style={styles.fieldValue}>{user?.phone}</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Address:</Text>
        <Text style={styles.fieldValue}>{user?.address?.city}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  fieldLabel: {
    flex: 1,
    fontWeight: "bold",
    marginRight: 10,
  },
  fieldValue: {
    flex: 2,
  },
});

export default UserProfile;
