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
import { PopularHomesCard } from "../../../components";
import FavoritesHeader from "../../../components/favorites/Header";

const favoriteHomes = () => {
  const user = useSelector((state) => state.user.user);

  const navigation = useNavigation();

  const renderHomes = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate("homeDetails", item)}>
        <PopularHomesCard data={item} />
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <FavoritesHeader />,
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.subTitle}>کورونه</Text>
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
    </SafeAreaView>
  );
};

export default favoriteHomes;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
