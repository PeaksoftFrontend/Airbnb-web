import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "Aiturgan",
    email: "",
    token: null,
    role: "GUEST",
    isAuthorized: false,
  },

  reducers: {
    login: (state, action) => {
      state.isAuthorized = true;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.role = "GUEST";
    },
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { login, logout, setUserRole } = authSlice.actions;

const BASE_URL = "http://18.185.84.235/api";
// const BASE_URL = import.meta.env.VITE_USERS_TABLE_FOR_ADMIN;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    googleLogin: builder.mutation({
      query: (token) => ({
        url: "/auth/google",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { token },
      }),
    }),
  }),
});

export const { useGoogleLoginMutation } = apiSlice;
