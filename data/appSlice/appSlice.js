import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  dealType: "",
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setDealType: (state, action) => {
      state.dealType = action.payload;
    },
  },
});

export const { setSearchTerm, setDealType } = AppSlice.actions;
export default AppSlice.reducer;
