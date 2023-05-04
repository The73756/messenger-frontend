import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const appStore = setupStore();
