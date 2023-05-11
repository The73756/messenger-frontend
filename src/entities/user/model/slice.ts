import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/shared/constants";

import { login, registration, checkAuth } from "./actions";

interface UserState {
  user: IUser | null;
  isAuth: boolean;
  isReg: boolean;
  error: string;
}

const initialState: UserState = {
  user: null,
  isAuth: false,
  isReg: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuth = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled.type, (state, action: PayloadAction<boolean>) => {
        state.isReg = action.payload;
      })
      .addCase(registration.rejected.type, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      })
      .addCase(login.fulfilled.type, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isAuth = true;
        state.error = "";
      })
      .addCase(login.rejected.type, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      })
      .addCase(checkAuth.fulfilled.type, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isAuth = true;
        state.error = "";
      })
      .addCase(checkAuth.rejected.type, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      })
  }
});
