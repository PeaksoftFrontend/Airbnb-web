import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlie";
import { usersApi } from "./api/users.service";
import { authApi } from "./api/auth.servers";
import { adminApi } from "./api/admin.application.service";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      authApi.middleware,
      adminApi.middleware
    ),
});
