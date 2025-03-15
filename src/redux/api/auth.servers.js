import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    googleLogin: builder.mutation({
      query: (token) => ({
        url: `/auth/google?tokenId=${token}`,
        method: "POST",
      }),
    }),
    loginAdmin: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/signIn",
        method: "POST",
        body: { email, password },
      }),
    }),
    getAnnouncementsFilter: builder.query({
      query: ({ region, houseType, rating, price, currentPage, pageSize }) => {
        const url = `/vendor/announcements-filter?${new URLSearchParams({
          ...(region && { region }),
          ...(rating && { rating }),
          ...(houseType && { houseType }),
          ...(price && { price }),
          ...(currentPage && { currentPage }),
          ...(pageSize && { pageSize }),
        }).toString()}`;
        return url;
      },
      transformResponse: (response) => {
        return {
          announcementResponses: response.announcementResponses || [],
          currentPage: response.currentPage,
          pageSize: response.pageSize || 16,
        };
      },
    }),
    favorite: builder.mutation({
      query: (announcementId) => ({
        url: `/favorites/${announcementId}`,
        method: "POST",
      }),
    }),
    getFavorites: builder.query({
      query: () => "/favorites/getAllFavorites",
    }),
  }),
});

export const {
  useGoogleLoginMutation,
  useLoginAdminMutation,
  useFavoriteMutation,
  useGetAnnouncementsFilterQuery,
  useGetFavoritesQuery,
} = authApi;
