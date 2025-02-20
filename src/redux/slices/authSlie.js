import { createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";
import Cookies from "js-cookie";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "Aiturgan",
    email: "",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NDAwNjE2OTUsImlhdCI6MTczOTgwMjQ5NSwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.jDIYRC4_AAibgRYcbwKaa_QUhNTEB7Oc45UQC9UlhyM",
    role: "ADMIN",
    isAuthorized: true,
  },

  reducers: {
    login: (state, action) => {
      state.isAuthorized = true;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.role = "USER";
    },
  },
});

export const { login, logout, setUserRole } = authSlice.actions;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    googleLogin: builder.mutation({
      query: (token) => ({
        url: "/auth/google",
        method: "POST",
        body: { token },
      }),
    }),
  }),
});

export const { useGoogleLoginMutation } = apiSlice;

export const adminAuthApi = createApi({
  reducerPath: "adminAuthApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/signIn",
        method: "POST",
        body: { email, password },
      }),
      transformResponse: (response) => {
        Cookies.set("token", response.token, { expires: 7 });
        return response;
      },
    }),
  }),
});

export const { useLoginMutation } = adminAuthApi;
