import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (id) => `users/getAnnouncementProfile/${id}`,
    }),
  }),
});
export const { useGetProfileQuery } = profileApi;
