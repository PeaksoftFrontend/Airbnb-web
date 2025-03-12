import { configureStore } from "@reduxjs/toolkit";

import { usersApi } from "./api/users.service";
import { authApi } from "./api/auth.servers";
import { authSlice } from "./slices/authSlie";
import { submitAdApi } from "./api/submitAdd.service";
import { applicationApi } from "./api/application.service";
import { announcementIdApi } from "./api/announcementId.service";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [submitAdApi.reducerPath]: submitAdApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [announcementIdApi.reducerPath]: announcementIdApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      authApi.middleware,
      applicationApi.middleware,
      announcementIdApi.middleware,
      submitAdApi.middleware
    ),
});
