import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  tagTypes: "users",
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      invalidatesTags: ["users"],
    }),
    getUsersDetails: builder.query({
      query: ({ id, value }) => `/users/get/${id}?value=${value}`,
      invalidatesTags: ["users"],
    }),
    getUsersDetailsAnnouncements: builder.query({
      query: ({ id }) => `/users/get/${id}/announcements`,
      invalidatesTags: ["users"],
    }),
    removeUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useRemoveUserMutation,
  useGetUsersDetailsQuery,
  useGetUsersDetailsAnnouncementsQuery,
} = usersApi;
