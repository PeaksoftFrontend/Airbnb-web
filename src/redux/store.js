import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlie";
import { usersApi } from "./api/users.service";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
