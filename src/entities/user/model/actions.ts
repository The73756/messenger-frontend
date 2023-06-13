import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiClient, LoginWithEmailDto, RegisterWithEmailDto, updateUserData } from "@/shared/api";

export const registration = createAsyncThunk(
  "registration/registration",
  async (user: RegisterWithEmailDto, thunkApi) => {
    try {
      const { data } = await apiClient.authControllerRegisterByEmail(user);
      return data;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.response.data.message);
    }
  },
);

export const login = createAsyncThunk(
  "registration/login",
  async (userData: LoginWithEmailDto, thunkApi) => {
    try {
      const { data: resLogin } = await apiClient.authControllerLoginWithEmail(userData);

      await localStorage.setItem("accessToken", JSON.stringify(resLogin.accessToken));

      const { data: user } = await apiClient.userControllerGetCurrentUser();
      return user;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.response.data.message);
    }
  },
);

export const checkAuth = createAsyncThunk("registration/check", async (_, thunkApi) => {
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

export const updateUser = createAsyncThunk(
  "user/update",
  async (data: updateUserData, thunkApi) => {
    const { userId, userData } = data;
    try {
      const { data } = await apiClient.usersControllerUpdateOne(userId, userData);
      return data;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.response.data.message);
    }
  },
);
