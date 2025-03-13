import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/users.service";
import { authSlice } from "./slices/authSlice";
import { housesApi } from "./api/houses.service";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [housesApi.reducerPath]: housesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, housesApi.middleware),
});
