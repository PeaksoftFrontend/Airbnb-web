import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlie";
import { usersApi } from "./api/users.service";
import { authApi } from "./api/auth.servers";
import { applicationApi } from "./api/application.service";
import { adminIdApi } from "./api/adminId.sevice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [adminIdApi.reducerPath]: adminIdApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      authApi.middleware,
      applicationApi.middleware,
      adminIdApi.middleware
    ),
});
