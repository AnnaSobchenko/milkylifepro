import { createSlice } from "@reduxjs/toolkit";

import { getAllUsers, delUserById } from "./userOperations";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isLoading: false,
  },

  reducers: {},

  extraReducers: {
    // getAllUsers
    [getAllUsers.pending](state) {
      state.error = null;
    },
    [getAllUsers.fulfilled](state, { payload }) {
      state.users = [...payload];
    },
    [getAllUsers.rejected](state, { payload }) {
      state.error = payload;
    },
    // delUserById
    [delUserById.pending](state) {
      state.error = null;
    },
    [delUserById.fulfilled](state, { payload }) {},
    [delUserById.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});
export default usersSlice.reducer;
