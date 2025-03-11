import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const submitAdApi = createApi({
  reducerPath: "submitAdApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    submitAnAd: builder.mutation({
      query: (formData) => ({
        url: "vendor/submitAnAd",
        method: "POST",
        body: formData,
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
    deleteFile: builder.mutation({
      query: (fileName) => ({
        method: "DELETED",
        url: `/api/file?fileName=${fileName}`,
      }),
    }),
  }),
});

export const {
  useSubmitAnAdMutation,
  useSubmitFileMutation,
  useDeleteFileMutation,
} = submitAdApi;
