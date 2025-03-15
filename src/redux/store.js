import { configureStore } from "@reduxjs/toolkit";

import { usersApi } from "./api/users.service";
import { authApi } from "./api/auth.servers";
import { submitAdApi } from "./api/submitAdd.service";
import { applicationApi } from "./api/application.service";
import { profileApi } from "./api/profile.service";
import { authSlice } from "./slices/authSlice";
import { housesApi } from "./api/houses.service";
import { adminIdApi } from "./api/adminId.sevice";
import { announcementIdApi } from "./api/announcementId.service";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [submitAdApi.reducerPath]: submitAdApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [announcementIdApi.reducerPath]: announcementIdApi.reducer,
    [adminIdApi.reducerPath]: adminIdApi.reducer,
    [housesApi.reducerPath]: housesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      authApi.middleware,
      applicationApi.middleware,
      announcementIdApi.middleware,
      adminIdApi.middleware,
      submitAdApi.middleware,
      applicationApi.middleware,
      profileApi.middleware,
      housesApi.middleware
    ),
});
