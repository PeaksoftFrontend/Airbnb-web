import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: baseQuery,
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/announcements/getProfile",
      providesTags: ["Profile"],
    }),
  }),
});
export const { useGetProfileQuery } = profileApi;
