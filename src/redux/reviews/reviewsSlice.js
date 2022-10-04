import { createSlice } from "@reduxjs/toolkit";
import {
  addReviews,
  approveReview,
  getReviews,
  removeReview,
} from "./reviewsOperations";

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
    // addReviews
    [addReviews.pending](state) {
      state.error = null;
    },
    [addReviews.fulfilled](state, { payload }) {},
    [addReviews.rejected](state, { payload }) {
      state.error = payload;
    },
    //approveReview
    [approveReview.pending](state) {
      state.error = null;
    },
    [approveReview.fulfilled](state, { payload }) {},
    [approveReview.rejected](state, { payload }) {
      state.error = payload;
    },
    //removeReview
    [removeReview.pending](state) {
      state.error = null;
    },
    [removeReview.fulfilled](state, { payload }) {},
    [removeReview.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export default reviewsSlice.reducer;
