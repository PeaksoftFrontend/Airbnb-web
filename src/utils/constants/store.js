import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import { authSlice } from "../../redux/slices/authSlie";
import { userApi } from "../../api/UserApi";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
  devTools: composeWithDevTools(),
});
