import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../api/api-base-query";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getApplicationById: builder.query({
      query: (id) => `/admin/applicationById?applicationId=${id}`,
    }),
  }),
});

export const { useGetApplicationByIdQuery } = adminApi;
