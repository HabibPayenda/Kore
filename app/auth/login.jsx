import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useNavigation } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { COLORS, FONT, SIZES } from "../../constants";

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
        <View style={styles.container}>
          <Text style={styles.title}>Kore</Text>
          <View style={styles.inputsContainer}>
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput style={styles.input} placeholder="Password" />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.regester}>Regester a new account</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height - 24,
    gap: 36,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  inputsContainer: {
    gap: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    color: COLORS.primary,
    backgroundColor: COLORS.lightWhite,
    width: "80%",
    padding: 5,
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 0,
    paddingHorizontal: SIZES.xSmall,
    borderRadius: 3,
  },
  btnText: {
    color: COLORS.lightWhite,
    textTransform: "uppercase",
    fontFamily: FONT.regular,
  },
  regester: {
    color: COLORS.primary,
    fontFamily: FONT.regular,
  },
});
