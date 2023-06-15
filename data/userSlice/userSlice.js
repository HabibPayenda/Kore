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

export const getUser = createAsyncThunk("user/getUser", async (id) => {
  // Code
  try {
    const result = await PropertiesApi.get(`/users/${id}`, {
      onUploadProgress: (progress) => {
        if (progress.loaded / progress.total === 1) {
        }
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const addFavoriteHome = createAsyncThunk(
  "user/addFavorite",
  async (data) => {
    // Code
    try {
      const result = await PropertiesApi.post("/user_favorite_homes", data, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });

      if (result.data.user) {
      }
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
export const removeFavoriteHome = createAsyncThunk(
  "user/removeFavoriteHome",
  async (id) => {
    // Code
    try {
      const result = await PropertiesApi.delete(`/user_favorite_homes/${id}`, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });

      return id;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const addPushToken = createAsyncThunk(
  "user/addPushToken",
  async ({ id, push_token }) => {
    // Code
    try {
      const response = await PropertiesApi.post(
        `/users/posh_token/${id}`,
        { push_token: push_token },
        {
          onUploadProgress: (progress) => {
            if (progress.loaded / progress.total === 1) {
            }
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

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

    builder.addCase(getUser.fulfilled, (state, action) => {
      // Code
      state.user = action.payload.user;
    });

    builder.addCase(removeFavoriteHome.fulfilled, (state, action) => {
      // Code
      const user = state.user;
      user.homes = user.homes.filter((home) => home.id !== action.payload);
      state.user = user;
    });

    builder.addCase(addFavoriteHome.fulfilled, (state, action) => {
      // Code
      const user = state.user;
      user.homes = [...user.homes, action.payload.home];
      state.user = user;
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      // Code
    });
    builder.addCase(addPushToken.fulfilled, (state, action) => {
      // Code
      state.user = action.payload.user;
    });
  },
});

export default userSlice.reducer;
