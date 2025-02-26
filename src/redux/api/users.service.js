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
      query: ({ id, value }) => `/users/get/${id}?value=${value}`,
    }),
    removeUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
    blockAnnouncement: builder.mutation({
      query: (announcementId) => ({
        url: `/admin/blockedAnnouncementsById?announcementId=${announcementId}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useRemoveUserMutation,
  useBlockAnnouncementMutation,
} = usersApi;
