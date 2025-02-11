
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    usersdata: userReducer, // Register the user slice reducer
  },
});
