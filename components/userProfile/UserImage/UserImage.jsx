import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

const UserImage = ({ uri, onChange }) => {
  const [imageUri, setImageUri] = useState(uri);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handlePickImage}>
          <AntDesign name="camerao" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  iconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    margin: 5,
  },
});

export default UserImage;
