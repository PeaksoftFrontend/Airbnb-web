import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const housesApi = createApi({
  reducerPath: "housesApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPopularsHouses: builder.query({
      query: () => "/announcements/getPopularHouses",
      providesTags: ["Annoncements"],
    }),
    getLatestAnnouncements: builder.query({
      query: () => "/announcements/latestAnnouncement",
      providesTags: ["Announcements"],
    }),
    getPopularApartment: builder.query({
      query: () => "/announcements/getPopularApartment",
      providesTags: ["Announcements"],
    }),
  }),
});

export const {
  useGetPopularApartmentQuery,
  useGetLatestAnnouncementsQuery,
  useGetPopularsHousesQuery,
} = housesApi;
