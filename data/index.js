import { configureStore } from "@reduxjs/toolkit";
import homesSlice from "./homesSlice";
import carsSlice from "./carsSlice/carsSlice";
const store = configureStore({
  reducer: {
    homes: homesSlice,
    cars: carsSlice,
  },
});

export default store;
