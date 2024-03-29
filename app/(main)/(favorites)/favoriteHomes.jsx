import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Stack, useNavigation } from "expo-router";
import FavoritesHeader from "../../../components/favorites/Header";
import FavoriteHomesCard from "../../../components/favorites/FavoriteHomesCard";

const favoriteHomes = () => {
  const user = useSelector((state) => state.user.user);

  const navigation = useNavigation();

  const renderHomes = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate("homeDetails", item)}>
        <FavoriteHomesCard home={item} />
      </Pressable>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <FavoritesHeader />,
        }}
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: "white", paddingVertical: 12 }}
      >
        <View style={styles.container}>
          {user?.homes?.length > 0 ? (
            <FlatList
              horizontal
              data={user?.homes}
              keyExtractor={(item) => item.id}
              renderItem={renderHomes}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <Text>تاسو کوم کور نه دی خوښ کړی</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default favoriteHomes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: 12,
  },
});
