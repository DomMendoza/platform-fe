import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://54.169.218.142" }),
  endpoints: (builder) => ({
    getGameProvider: builder.query({
      query: (id) => ({ url: `${id}` }),
    }),
  }),
});

export const { useGetGameProviderQuery } = apiSlice;
