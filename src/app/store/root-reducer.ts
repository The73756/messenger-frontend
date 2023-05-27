import { combineReducers } from "@reduxjs/toolkit";

import { userSlice, userApi } from "@/entities/user";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
});
