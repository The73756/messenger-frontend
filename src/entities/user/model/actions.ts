import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ICreateUser {
  email: string;
  password: string;
  confirmPassword: string;
}

const setCookie = (name: string, value: string, options: any ) => {
  options = {
    path: "/",
    "max-age": 24*60*60*1000,
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

export const registration = createAsyncThunk(
  "auth/registration",
  async (user: ICreateUser, thunkApi) => {
    try {
      const response = await axios.post("http://unknown-messenger.ru/api/auth/register/email", user);
      console.log(response.data)
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.response.data.message);
    }
  },
);
