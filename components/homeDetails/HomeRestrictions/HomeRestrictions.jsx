import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONT, SIZES } from "../../../constants";

const HomeRestrictions = ({ restrictions }) => {
  const renderRestrictions = () => {
    return restrictions?.map((item) => {
      return (
        <View style={styles.restrictionContainer}>
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
      <Text style={styles.title}>بندیزونه</Text>
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
    marginBottom: SIZES.medium,
    color: COLORS.secondary,
    backgroundColor: COLORS.lightWhite,
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
