import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";
import Cookies from "js-cookie";

export const authApi = createApi({
  reducerPath: "authApi",
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

export const { useGoogleLoginMutation } = authApi;

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
