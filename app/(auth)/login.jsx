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
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const token = useSelector((state) => state.user.token);
  console.log("token in login :  ", token);

  useEffect(() => {
    dispatch(localSignIn());
  }, []);
  useEffect(() => {
    if (token) {
      router.push("(main)/home");
    }
  }, [token]);

  const handleLogin = () => {
    if (username === "" || password === "") {
      console.log("empty");
    } else {
      dispatch(signIn({ name: username, password: password }));
    }
  };

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
          <Text style={styles.title}>کور</Text>
          <View style={styles.inputsContainer}>
            <TextInput
              value={username}
              onChangeText={(value) => setUsername(value)}
              style={styles.input}
              placeholder="د کاروونکي نوم"
            />
            <TextInput
              value={password}
              onChangeText={(value) => setPassword(value)}
              style={styles.input}
              placeholder="پټه کلیمه"
            />
            <TouchableOpacity onPress={handleLogin} style={styles.btn}>
              <Text style={styles.btnText}>ننوتل</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialMediaLogin}>
            <Text style={styles.socialMediaTitle}>
              یا د لاندې حسابونو په مرسته ننوزئ
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
          <Pressable onPress={() => navigation.navigate("(auth)/signUp")}>
            <Text style={styles.regester}>او یا هم نوی حساب جوړ کړئ</Text>
          </Pressable>
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
    fontSize: SIZES.small,
  },
});
