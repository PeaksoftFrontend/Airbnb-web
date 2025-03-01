import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const housesApi = createApi({
  reducerPath: "housesApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getLatestAnnouncements: builder.query({
      query: () => "/announcements/latestAnnouncement",
      providesTags: ["Announcements"],
    }),
    getPopularsApartments: builder.query({
      query: () => "/announcements/getPopularApartment",
      providesTags: ["Announcements"],
    }),
    getPopularsHouses: builder.query({
      query: () => "/announcements/getPopularHouses",
      providesTags: ["Annoncements"],
    }),
  }),
});

export const {
  useGetLatestAnnouncementsQuery,
  useGetPopularsApartmentsQuery,
  useGetPopularsHousesQuery,
} = housesApi;
