import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nytimes.com/svc/books/v3",
  }),
  endpoints: (builder) => ({
    getFiction: builder.query({
      query: () =>
        `/lists/current/hardcover-fiction.json?api-key=97gbGLZdsTWt4QPs9XZOXgw9kpAELRh2`,
    }),
    getNonfiction: builder.query({
      query: () =>
        `/lists/current/hardcover-nonfiction.json?api-key=97gbGLZdsTWt4QPs9XZOXgw9kpAELRh2`,
    }),
  }),
});

export const { useGetFictionQuery, useGetNonfictionQuery } = booksApi;
