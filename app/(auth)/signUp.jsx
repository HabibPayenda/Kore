import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const SignUp = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      <View>
        <Text>Sign UP</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
