import { configureStore } from "@reduxjs/toolkit";
import { zepReducer } from "./zep";

const store = configureStore({
  reducer: {
    zep: zepReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
