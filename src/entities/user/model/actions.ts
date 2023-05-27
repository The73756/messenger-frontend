import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  apiClient,
  LoginWithEmailDto,
  RegisterWithEmailDto,
} from "@/shared/api";

export const registration = createAsyncThunk(
  "auth/registration",
  async (user: RegisterWithEmailDto, thunkApi) => {
    try {
      const { data } = await apiClient.authControllerRegisterByEmail(user);
      return data;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData: LoginWithEmailDto, thunkApi) => {
    try {
      const { data: resLogin } = await apiClient.authControllerLoginWithEmail(
        userData
      );

      await localStorage.setItem(
        "accessToken",
        JSON.stringify(resLogin.accessToken)
      );

      const { data: user } = await apiClient.userControllerGetCurrentUser();
      return user;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.response.data.message);
    }
  }
);

export const checkAuth = createAsyncThunk("auth/check", async (_, thunkApi) => {
  try {
    const { data } = await apiClient.userControllerGetCurrentUser({
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    });
    return data;
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.response.data.message);
  }
});
