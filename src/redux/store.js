import { configureStore } from "@reduxjs/toolkit";

import { usersApi } from "./api/users.service";
import { authApi } from "./api/auth.servers";
<<<<<<< HEAD
import { authSlice } from "./slices/authSlie";
import { submitAdApi } from "./api/submitAdd.service";
=======
import { applicationApi } from "./api/application.service";
>>>>>>> origin

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
<<<<<<< HEAD
    [submitAdApi.reducerPath]: submitAdApi.reducer,
=======
    [applicationApi.reducerPath]: applicationApi.reducer,
>>>>>>> origin
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      authApi.middleware,
<<<<<<< HEAD
      submitAdApi.middleware
=======
      applicationApi.middleware
>>>>>>> origin
    ),
});
