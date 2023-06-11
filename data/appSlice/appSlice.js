import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = AppSlice.actions;
export default AppSlice.reducer;
