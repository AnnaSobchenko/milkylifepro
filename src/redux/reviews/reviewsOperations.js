import { createAsyncThunk } from "@reduxjs/toolkit";

import { getReviewsApi } from "../../utils/fetchApi";

export const getReviews = createAsyncThunk(
  "reviews/get",
  async (_, thunkApi) => {
    try {
      const data = await getReviewsApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

