import { createSlice } from "@reduxjs/toolkit";
import { getPrices } from "./pricesOperations";

const pricesSlice = createSlice({
  name: "prices",
  initialState: {
    prices: [],
    error: null,
    isLoading: false,
  },

  reducers: {
    
  },

  extraReducers: {
    // getPrices
    [getPrices.pending](state) {
      state.error = null;
    },
    [getPrices.fulfilled](state, { payload }) {
      state.prices = [...payload];
    },
    [getPrices.rejected](state, { payload }) {
      state.error = payload;
    },   
  },
});

export default pricesSlice.reducer;
