import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils";

export const signIn = createAsyncThunk("user/signIn", async (data) => {
  // Code
  try {
    const result = await PropertiesApi.post(
      "/users/login",
      { name: data.name, password: data.password },
      {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      }
    );
    await AsyncStorage.setItem("token", result.data.token);
    await AsyncStorage.setItem("user", JSON.stringify(result.data.user));
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const localSignIn = createAsyncThunk("user/localSignIn", async () => {
  // Code
  const token = await AsyncStorage.getItem("token");
  const user = await AsyncStorage.getItem("user");
  return { token, user };
});

export const signOut = createAsyncThunk("user/signOut", async () => {
  // Code
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("user");
  return null;
});

export const addUser = createAsyncThunk("user/addUser", async (data) => {
  // Code
  try {
    const result = await PropertiesApi.post(
      "/users",
      { name: data.name, password: data.password, isAdmin: data.isAdmin },
      {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      }
    );

    if (result.data.user) {
    }
    return 1;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const initialState = {
  user: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      // Code
      state.token = action.payload.token;
      state.user = action.payload.user;
    });

    builder.addCase(localSignIn.fulfilled, (state, action) => {
      // Code
      state.token = action.payload.token;
      state.user = JSON.parse(action.payload.user);
    });

    builder.addCase(signOut.fulfilled, (state, action) => {
      // Code
      state.token = action.payload;
      state.user = {};
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      // Code
    });
  },
});

export default userSlice.reducer;
