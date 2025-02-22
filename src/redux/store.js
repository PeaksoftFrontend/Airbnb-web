import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlie";
import { usersApi } from "./api/users.service";
import { adminAuthApi, authApi } from "./api/auth.servers";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      authApi.middleware,
      adminAuthApi.middleware
    ),
});
