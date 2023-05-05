import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ICreateUser, ILoginUser, IUser } from "@/shared/constants";

interface IResUserLogin {
  accessToken: string;
}

export const registration = createAsyncThunk(
  "auth/registration",
  async (user: ICreateUser, thunkApi) => {
    try {
      const { data } = await axios.post<IUser>(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register/email`, user);
      return data;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.response.data.message);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: ILoginUser, thunkApi) => {
    try {
      const { data } = await axios.post<IResUserLogin>(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`, user);
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.response.data.message);
    }
  },
);