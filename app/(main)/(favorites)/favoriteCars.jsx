import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import FavoritesHeader from "../../../components/favorites/Header";

const favoriteCars = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <FavoritesHeader {...props} />,
        }}
      />
      <Text>favoriteCars</Text>
    </View>
  );
};

export default favoriteCars;
