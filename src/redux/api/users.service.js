import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUserById: builder.query({
      query: (id) => `/users/get/${id}?value=bookings`,
    }),
    removeUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useRemoveUserMutation } =
  usersApi;
