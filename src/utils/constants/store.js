import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, authSlice } from "../../redux/slices/authSlie";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
