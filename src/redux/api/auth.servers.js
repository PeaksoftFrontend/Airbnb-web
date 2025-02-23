import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

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
    loginAdmin: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/signIn",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useGoogleLoginMutation, useLoginAdminMutation } = authApi;
