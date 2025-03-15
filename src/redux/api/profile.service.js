import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => `/profile/bookings/my-announcements`,
    }),
    getFilteredData: builder.query({
      query: (filter) => {
        const { houseType, status, priceRange, rating } = filter;
        return {
          url: `/profile/filter`,
          params: { houseType, status, priceRange, rating },
        };
      },
    }),
  }),
});
export const { useGetProfileQuery, useGetFilteredDataQuery } = profileApi;
