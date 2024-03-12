import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type appDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;
