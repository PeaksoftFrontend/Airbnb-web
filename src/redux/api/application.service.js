import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: baseQuery,
  tagTypes: "announcement",
  endpoints: (builder) => ({
    getApplication: builder.query({
      query: ({ page, size }) =>
        `admin/announcementsModeration?currentPage=${page}&pageSize=${size}`,
      providesTags: ["announcement"],
    }),
    getAllHousing: builder.query({
      query: ({ status, houseType, rating, price }) => {
        const url = `/announcements/announcements-filter?${new URLSearchParams({
          ...(status && { status }),
          ...(houseType && { houseType }),
          ...(rating && { rating }),
          ...(price && { price }),
        }).toString()}`;
        return url;
      },
      providesTags: ["announcement"],
    }),
    acceptedAnnouncement: builder.mutation({
      query: ({ id, value, message }) => ({
        method: "POST",
        url: `/admin/accepted-announcement/${id}?value=${value}&messageFromAdminToUser=${message}`,
      }),
      invalidatesTags: ["announcement"],
    }),
    announcementDetail: builder.query({
      query: (id) => `/admin/applicationById?applicationId=${id}`,
    }),
    blockingAnnouncement: builder.mutation({
      query: (id) => ({
        method: "POST",
        url: `/admin/blockedAnnouncementsById?announcementId=${id}`,
      }),
      invalidatesTags: ["announcement"],
    }),
    blockUser: builder.mutation({
      query: (userId) => `/admin/blockAllAds/${userId}`,
    }),
  }),
});

export const {
  useGetApplicationQuery,
  useGetAllHousingQuery,
  useAcceptedAnnouncementMutation,
  useBlockingAnnouncementMutation,
  useAnnouncementDetailQuery,
  useBlockUserMutation,
} = applicationApi;
