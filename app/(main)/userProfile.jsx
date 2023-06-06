import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import userImage from "../../assets/images/user.jpg";
import UserImage from "../../components/userProfile/UserImage/UserImage";

const UserProfile = ({ name, email, phone, address }) => {
  return (
    <View style={styles.container}>
      <UserImage />
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Name:</Text>
        <Text style={styles.fieldValue}>{name}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Email:</Text>
        <Text style={styles.fieldValue}>{email}</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Phone:</Text>
        <Text style={styles.fieldValue}>{phone}</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Address:</Text>
        <Text style={styles.fieldValue}>{address}</Text>
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
