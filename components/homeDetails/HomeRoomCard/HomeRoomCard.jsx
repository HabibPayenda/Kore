import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";

const HomeRoomCard = ({
  width,
  length,
  to_sun,
  cupboard,
  windows,
  imageUrl,
}) => {
  return (
    <Card>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <Card.Divider />
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Icon name="resize-both" type="font-awesome" />
          <Text>{`${width} x ${length}`}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="sun" type="font-awesome" />
          <Text>{to_sun ? "Has Sun" : "No Sun"}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="cabinet" type="font-awesome" />
          <Text>{cupboard ? "Has Cupboard" : "No Cupboard"}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="window-maximize" type="font-awesome" />
          <Text>{`${windows} Windows`}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 150,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default HomeRoomCard;
