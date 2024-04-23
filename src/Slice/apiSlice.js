import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getGameProvider: builder.query({
      query: (link) => ({ url: `${link}` }),
    }),
  }),
});

export const { useGetGameProviderQuery } = apiSlice;
