import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../redux/slices/authSlie";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});
