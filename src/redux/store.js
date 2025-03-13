import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/users.service";
import { authSlice } from "./slices/authSlice";
import { housesApi } from "./api/houses.service";
import { authApi } from "./api/auth.servers";
import { submitAdApi } from "./api/submitAdd.service";
import { applicationApi } from "./api/application.service";
import { adminIdApi } from "./api/adminId.sevice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [submitAdApi.reducerPath]: submitAdApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [adminIdApi.reducerPath]: adminIdApi.reducer,
    [housesApi.reducerPath]: housesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      authApi.middleware,
      applicationApi.middleware,
      adminIdApi.middleware,
      submitAdApi.middleware,
      applicationApi.middleware,
      submitAdApi.middleware,
      housesApi.middleware
    ),
});
