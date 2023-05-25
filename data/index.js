import { configureStore } from "@reduxjs/toolkit";
import homesSlice from "./homesSlice";
const store = configureStore({
  reducer: {
    homes: homesSlice,
  },
});

export default store;
