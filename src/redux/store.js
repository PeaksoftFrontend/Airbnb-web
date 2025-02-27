import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlie";
import { usersApi } from "./api/users.service";
import { submitAdApi } from "./api/submitAdd.service";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [submitAdApi.reducerPath]: submitAdApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, submitAdApi.middleware),
});
