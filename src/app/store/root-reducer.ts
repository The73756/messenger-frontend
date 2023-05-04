import { combineReducers } from "@reduxjs/toolkit";

import { userSlice } from "@/entities/user";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
