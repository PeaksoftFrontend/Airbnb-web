import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    removeUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetUsersQuery, useRemoveUserMutation } = usersApi;
