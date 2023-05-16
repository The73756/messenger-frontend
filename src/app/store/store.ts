import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "@/entities/user";

import { rootReducer } from "./root-reducer";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
      getDefaultMiddleware()
        .concat(userApi.middleware)
    )
  });
};

export const appStore = setupStore();
