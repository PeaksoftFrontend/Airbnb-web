import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    googleLogin: builder.mutation({
      query: (token) => ({
        url: `/auth/google?token=${token}`,
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
      query: ({ region, category, type, priceRange, page }) => {
        const params = new URLSearchParams();
        if (region) params.append("region", region);
        if (category) params.append("category", category);
        if (type) params.append("type", type);
        if (priceRange) params.append("priceRange", priceRange);
        if (page) params.append("page", page);

        return `/vendor/announcements-filter?${params.toString()}`;
      },
      providesTags: () => [{ type: "Announcements", id: "FILTERS" }],
    }),
    favorite: builder.mutation({
      query: (announcementId) => ({ url: `/favorites/${announcementId}` }),
      method: "POST",
    }),
  }),
});

export const {
  useGoogleLoginMutation,
  useLoginAdminMutation,
  useFavoriteMutation,
  useGetAnnouncementsFilterQuery,
} = authApi;
