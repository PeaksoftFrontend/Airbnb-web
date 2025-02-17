import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://18.185.84.235/api",
    prepareHeaders: (headers) => {
      const TOKEN =
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NDAwNjE2OTUsImlhdCI6MTczOTgwMjQ5NSwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.jDIYRC4_AAibgRYcbwKaa_QUhNTEB7Oc45UQC9UlhyM";
      if (TOKEN) {
        headers.set("Authorization", TOKEN);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
