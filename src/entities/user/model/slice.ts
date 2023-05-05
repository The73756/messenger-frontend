import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { registration } from "./actions";

interface UserState {
  user: any;
  isAuth: boolean;
  error: string;
}

const initialState: UserState = {
  user: null,
  isAuth: false,
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
      .addCase(registration.fulfilled.type, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isAuth = true;
        state.error = "";
      })
      .addCase(registration.rejected.type, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      })
  }
});
