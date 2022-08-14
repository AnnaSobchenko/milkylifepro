import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPricesApi } from "../../utils/fetchApi";

export const getPrices = createAsyncThunk(
  "prices/get",
  async (_, thunkApi) => {
    try {
      const data = await getPricesApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

