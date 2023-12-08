import { configureStore } from "@reduxjs/toolkit";

import { billsReducer } from "./bills";
import { billsAPI } from "@/services/bills";

export const store = configureStore({
  reducer: {
    billsReducer,
    [billsAPI.reducerPath]: billsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(billsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
