import { createSlice } from "@reduxjs/toolkit";
import {
  logout,
  signin,
  signup,
  getInfo,
  refreshUserToken,
} from "./authOperations";

const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { email: "", name: "", phone: "", avatarURL: "" },
    token: null,
    refreshToken: null,
    _id: null,
    isLoading: false,
    isLoggedIn: false,
    isAdmin: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // SIGN UP
    [signup.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [signup.fulfilled](state, { payload }) {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [signup.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    // SIGN IN
    [signin.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [signin.fulfilled](state, { payload }) {
      state.user.email = payload.user.email;
      state.user.name = payload.user.name;
      state.user.phone = payload.user.phone;
      state.user.avatarURL = payload.user.avatarURL;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state._id = payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
      payload.user.email === adminEmail
        ? (state.isAdmin = true)
        : (state.isAdmin = false);
    },
    [signin.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
      state.isAdmin = false;
    },

    // GET INFO
    [getInfo.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getInfo.fulfilled](state, { payload }) {
      state.user.email = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [getInfo.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    // REFRESH
    [refreshUserToken.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [refreshUserToken.fulfilled](state, { payload }) {
      console.log('payload', payload)
      state.isLoggedIn = true;
      state.isLoading = false;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.user.email = payload.email;
      state.user.name = payload.name;
      state.user.phone = payload.phone;
      state.user.avatarURL = payload.avatarURL;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state._id = payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
      payload.email === adminEmail
        ? (state.isAdmin = true)
        : (state.isAdmin = false);
    },
    [refreshUserToken.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.isLoggedIn = false;
    },

    // LOGOUT
    [logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.user = { email: null };
      state.token = null;
      state.refreshToken = null;
      state._id = null;
      state.isLoggedIn = false;
      state.isAdmin = false;
      state.isLoading = false;
    },
    [logout.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = payload;
    },
  },
});
export const { logoutUser, addIsAdmin } = authSlice.actions;
export default authSlice.reducer;
