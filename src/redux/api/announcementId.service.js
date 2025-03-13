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
    createFeedback: builder.mutation({
      query: (feedbackData) => ({
        url: "/feedbacks/26",
        method: "POST",
        body: feedbackData,
      }),
    }),
    submitFile: builder.mutation({
      query: (file) => {
        const formData = new FormData();
        formData.append("file", file);
        return {
          url: "/file",
          method: "POST",
          body: formData,
        };
      },
    }),
    removeFeedback: builder.mutation({
      query: (id) => ({
        url: `/feedbacks/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAnnouncementIdQuery,
  useGetFeedbackQuery,
  useGetRatingQuery,
  useCreateFeedbackMutation,
  useSubmitFileMutation,
  useRemoveFeedbackMutation,
} = announcementIdApi;
