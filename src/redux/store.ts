import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
import counterSlice from "./counterSlice";

export const store = configureStore({
  reducer: {
    color: colorSlice,
    count: counterSlice
  },
});