import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { COLORS, FONT, SIZES } from "../../../constants";

export default class HomeRestrictions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>بندیزونه</Text>
        <Text style={styles.notAvailable}>
          د دغه کور د بندیزونو په اړه معلومات نشته.
        </Text>
      </View>
    );
  }
}

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
});
