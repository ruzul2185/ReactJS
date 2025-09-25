import { configureStore } from "@reduxjs/toolkit";

import countReducer from "../slice/countSlice";
import authReducer from "../slice/authSlice";

export const ReduxStore = configureStore({
  reducer: {
    count: countReducer,
    auth: authReducer,
  },
});
