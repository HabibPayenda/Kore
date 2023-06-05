import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useNavigation } from "expo-router";

const Login = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <View>
          <Text>Login</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
