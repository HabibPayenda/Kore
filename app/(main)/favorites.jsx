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
import { COLORS, FONT, SIZES } from "../../constants";
import { useSelector } from "react-redux";
import { PopularHomesCard } from "../../components";
import { useNavigation } from "expo-router";

const favorites = () => {
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
      <ScrollView>
        <Text style={styles.title}>
          ستاسو تر ټولو ښه د موټرو، کورونو او ځمکو انتخابونه
        </Text>
        <View>
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

export default favorites;

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    padding: SIZES.medium,
    color: COLORS.primary,
  },
});
