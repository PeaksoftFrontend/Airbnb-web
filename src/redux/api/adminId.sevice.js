import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const adminIdApi = createApi({
  reducerPath: "adminIdApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAnnouncementId: builder.query({
      query: (id) => `/admin/getByIdAnnouncements/${id}`,
    }),
    Feedback: builder.query({
      query: (id) => `/feedbacks/${id}`,
    }),
    Rating: builder.query({
      query: (id) => `/feedbacks/countRating/${id}`,
    }),
  }),
});

export const { useGetAnnouncementIdQuery, useFeedbackQuery, useRatingQuery } =
  adminIdApi;
