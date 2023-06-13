import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONT, SIZES, colors } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";

const HomeRestrictions = ({ restrictions }) => {
  const renderRestrictions = () => {
    return restrictions?.map((item) => {
      return (
        <View key={item.id} style={styles.restrictionContainer}>
          <Text style={styles.restrictionText} numberOfLines={3}>
            {item?.description}
          </Text>
          <AntDesign
            name="closecircleo"
            size={SIZES.medium - 2}
            color={COLORS.primary}
          />
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
      <LinearGradient colors={[colors.primary.main, colors.primary.dark1]}>
        <Text style={styles.title}>بندیزونه</Text>
      </LinearGradient>
      {restrictions?.length > 0 ? (
        renderRestrictions()
      ) : (
        <Text style={styles.notAvailable}>
          د دغه کور د بندیزونو په اړه معلومات نشته.
        </Text>
      )}
    </View>
  );
};

export default HomeRestrictions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  title: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: "#fafafa",
    elevation: 2,
    paddingHorizontal: SIZES.large,
  },
  notAvailable: {
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.xSmall,
  },
  restrictionContainer: {
    paddingRight: SIZES.medium,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: 5,
    paddingVertical: 4,
  },

  restrictionText: {
    width: "90%",
  },
});
