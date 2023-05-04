import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  num: number;
}

const initialState: UserState = {
  num: 0
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.num += action.payload;
    }
  }
})

