import { configureStore } from "@reduxjs/toolkit";
import { adminAuthApi, apiSlice, authSlice } from "./slices/authSlie";
import { usersApi } from "./api/users.service";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      apiSlice.middleware,
      adminAuthApi.middleware
    ),
});
