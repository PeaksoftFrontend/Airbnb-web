import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const submitAdApi = createApi({
  reducerPath: "submitAdApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    submitAnAd: builder.mutation({
      query: (formData) => ({
        url: "/submit-ad",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useSubmitAnAdMutation } = submitAdApi;
