import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./reviewsOperations";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    error: null,
    isLoading: false,
  },

  reducers: {},

  extraReducers: {
    // getReviews
    [getReviews.pending](state) {
      state.error = null;
    },
    [getReviews.fulfilled](state, { payload }) {
      state.reviews = [...payload];
    },
    [getReviews.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export default reviewsSlice.reducer;
