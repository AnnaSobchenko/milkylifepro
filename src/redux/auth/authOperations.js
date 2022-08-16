import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signinUserApi,
  logoutUserApi,
  signupUserApi,
  getUserInfo,
  refreshUserTokenApi,
} from "../../utils/fetchApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunkApi) => {
    const { confirmPassword, ...rest } = userData;
    try {
      const data = await signupUserApi(rest);
      toast.success(
        "A letter has been sent to your e-mail address, follow the link in the letter",
        { containerId: "A" }
      );
      return data;
    } catch (error) {
      error.response.status === 409
        ? toast.error(
            `Користувач з таким email вже зареєстровано. ${error.message}`,
            { containerId: "D" }
          )
        : toast.error(`Помилка реєстрації. ${error.message}`, {
            containerId: "D",
          });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (userData, thunkApi) => {
    try {
      const data = await signinUserApi(userData);
      return data;
    } catch (error) {
      toast.error(`Невірний email або пароль, ${error.message}`, {
        containerId: "C",
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getInfo = createAsyncThunk(
  "auth/current",
  async (userInfo, thunkApi) => {
    try {
      const data = await getUserInfo(userInfo);
      return data.user.email;
    } catch (error) {
      return thunkApi.rejectWithValue("No user data :(");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;
  try {
    return await logoutUserApi(persistedToken);
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getNewTokens = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    console.log("first", persistedToken);
    if (!persistedToken) thunkApi.rejectWithValue();

    try {
      const data = await refreshUserTokenApi({ persistedToken });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
