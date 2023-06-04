import { configureStore } from "@reduxjs/toolkit";
import homesSlice from "./homesSlice";
import carsSlice from "./carsSlice/carsSlice";
import userSlice from "./userSlice/userSlice";
const store = configureStore({
  reducer: {
    homes: homesSlice,
    cars: carsSlice,
    user: userSlice,
  },
});

export default store;
