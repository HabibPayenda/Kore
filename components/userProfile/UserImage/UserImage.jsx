import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import userImagePlaceholder from "../../../assets/images/userImagePlaceholder.png";
import { checkImageURL } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { addUserProfilePicture } from "../../../data/userSlice/userSlice";
const UserImage = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  console.log(user);

  const [imageUri, setImageUri] = useState(user?.image_url);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      const extension = result.assets[0].uri.split(".").pop();
      const filename = `${user?.name}__${JSON.stringify(
        Math.floor(new Date().getTime() / 1000)
      )}.${extension}`;
      let formData = new FormData();
      formData.append("image", {
        uri: result.assets[0].uri,
        name: filename,
        type: `image/${extension}`,
      });

      dispatch(addUserProfilePicture({ image: formData, id: user?.id }));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={imageUri ? { uri: imageUri } : userImagePlaceholder}
      />
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
    backgroundColor: "#fafafa",
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
