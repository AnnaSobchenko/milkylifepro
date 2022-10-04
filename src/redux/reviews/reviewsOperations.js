import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  addReviewApi,
  approveReviewApi,
  getReviewsApi,
  removeReviewApi,
} from "../../utils/fetchApi";

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

export const addReviews = createAsyncThunk(
  "reviews/post",
  async (userData, thunkApi) => {
    try {
      const data = await addReviewApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const approveReview = createAsyncThunk(
  "reviews/postapprove",
  async (userData, thunkApi) => {
    try {
      const data = await approveReviewApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeReview = createAsyncThunk(
  "reviews/remove",
  async (userData, thunkApi) => {
    try {
      const data = await removeReviewApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
