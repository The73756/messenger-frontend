import { combineReducers } from "@reduxjs/toolkit";

import { userApi, userSlice } from "@/entities/user";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
});
