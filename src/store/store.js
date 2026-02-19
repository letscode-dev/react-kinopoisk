import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlce";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
