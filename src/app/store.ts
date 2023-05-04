import { configureStore } from "@reduxjs/toolkit"

import { rootReducer } from "./rootReducer";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export const appStore = setupStore();

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
