import { configureStore } from "@reduxjs/toolkit";

import countReducer from "../slice/countSlice";

export const ReduxStore = configureStore({
  reducer: {
    count: countReducer,
  },
});
