import { configureStore } from "@reduxjs/toolkit";
import homesSlice from "./homesSlice";
import carsSlice from "./carsSlice/carsSlice";
import userSlice from "./userSlice/userSlice";
import appSlice from "./appSlice/appSlice";
const store = configureStore({
  reducer: {
    homes: homesSlice,
    cars: carsSlice,
    user: userSlice,
    app: appSlice,
  },
});

export default store;
