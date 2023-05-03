

import { appStore } from "./store";

declare global {
  type RootState = ReturnType<typeof appStore.getState>
  type AppDispatch = typeof appStore.dispatch
}
