import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const announcementIdApi = createApi({
  reducerPath: "announcementIdApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAnnouncementId: builder.query({
      query: (id) => `/vendor/getAnnouncement/${id}`,
    }),
    getFeedback: builder.query({
      query: (id) => `/feedbacks/${id}`,
    }),
    getRating: builder.query({
      query: (id) => `/feedbacks/countRating/${id}`,
    }),
  }),
});

export const {
  useGetAnnouncementIdQuery,
  useGetFeedbackQuery,
  useGetRatingQuery,
} = announcementIdApi;
