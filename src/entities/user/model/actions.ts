import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { apiClient } from "@/shared/api";
import { ICreateUser, ILoginUser, IUser } from "@/shared/constants";

interface IResUserLogin {
  accessToken: string;
}

export const registration = createAsyncThunk(
  "auth/registration",
  async (user: ICreateUser, thunkApi) => {
    try {
      const { data } = await axios.post<boolean>("/api/auth/register/email", user);
      return data;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.response.data.message);
    }
  },
);

export const login = createAsyncThunk("auth/login", async (userData: ILoginUser, thunkApi) => {
  try {
    const { data: resLogin } = await axios.post<IResUserLogin>("/api/auth/login/email", userData);
    await localStorage.setItem("accessToken", JSON.stringify(resLogin.accessToken));
    const { data } = await apiClient.get<IUser>("/user");
    return data;
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.response.data.message);
  }
});

export const checkAuth = createAsyncThunk("auth/check", async (_, thunkApi) => {
  try {
    const { data } = await apiClient.get<IUser>("/user", {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    });
    return data;
  } catch (e: any) {
    return thunkApi.rejectWithValue(e.response.data.message);
  }
});
