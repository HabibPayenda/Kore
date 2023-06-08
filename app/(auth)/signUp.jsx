import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useNavigation, useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, FONT, SIZES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { localSignIn, signIn } from "../../data/userSlice/userSlice";
import googleLogo from "../../assets/images/google.png";
import facebookLogo from "../../assets/images/facebook.png";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (token) {
      router.push("(main)/home");
    }
  }, [token]);

  const handleSignUp = () => {
    if (username === "" || password === "") {
      console.log("empty");
    } else {
      dispatch(signIn({ name: username, password: password }));
    }
  };

  const navigation = useNavigation();
  // useEffect(() => {
  //   navigation.addListener("beforeRemove", (e) => {
  //     e.preventDefault();
  //   });
  // }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
        />
        <View style={styles.container}>
          <Text style={styles.title}>کور</Text>
          <View style={styles.inputsContainer}>
            <Text style={styles.subTitle}>خپل حساب جوړ کړئ</Text>
            <TextInput
              textAlign="right"
              value={username}
              onChangeText={(value) => setUsername(value)}
              style={styles.input}
              placeholder="د کاروونکي نوم"
            />
            <TextInput
              textAlign="right"
              value={password}
              onChangeText={(value) => setPassword(value)}
              style={styles.input}
              placeholder="پټه کلیمه"
            />
            <TextInput
              textAlign="right"
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              style={styles.input}
              placeholder=" د پټې کلیمې تائید"
            />
            <TouchableOpacity onPress={handleSignUp} style={styles.btn}>
              <Text style={styles.btnText}>جوړول</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialMediaLogin}>
            <Text style={styles.socialMediaTitle}>
              یا د لاندې حسابونو په مرسته حساب جوړ کړئ
            </Text>
            <View style={styles.socialMediaIcons}>
              <Pressable style={styles.socialIconContainer}>
                <Image style={styles.socialMediaIcon} source={googleLogo} />
              </Pressable>
              <Pressable style={styles.socialIconContainer}>
                <Image style={styles.socialMediaIcon} source={facebookLogo} />
              </Pressable>
            </View>
          </View>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.regester}> او یا هم خپل حساب ته ننوزئ</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

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
    paddingHorizontal: 28,
  },
  subTitle: {
    alignSelf: "flex-end",
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  input: {
    color: COLORS.primary,
    backgroundColor: "#fdfdfd",
    width: "100%",
    padding: 5,
    elevation: 1,
  },
  socialMediaLogin: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  socialMediaTitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  socialMediaIcons: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  socialIconContainer: {
    backgroundColor: "#fefefe",
    paddingVertical: 7,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  socialMediaIcon: {
    height: 25,
    width: 25,
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 5,
    borderRadius: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: COLORS.lightWhite,
    textTransform: "uppercase",
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
  },
  regester: {
    color: COLORS.primary,
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    marginTop: 30,
  },
});
