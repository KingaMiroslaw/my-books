import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nytimes.com/svc/books/v3",
  }),
  endpoints: (builder) => ({
    getFictionBooks: builder.query({
      query: () =>
        `/lists/current/hardcover-fiction.json?api-key=97gbGLZdsTWt4QPs9XZOXgw9kpAELRh2`,
      transformResponse: (response) => {
        const filteredResponse = response.results.books.filter(
          (book) => book.book_image !== null
        );
        return filteredResponse;
      },
    }),
    getNonfictionBooks: builder.query({
      query: () =>
        `/lists/current/hardcover-nonfiction.json?api-key=97gbGLZdsTWt4QPs9XZOXgw9kpAELRh2`,
      transformResponse: (response) => {
        const filteredResponse = response.results.books.filter(
          (book) => book.book_image !== null
        );
        return filteredResponse;
      },
    }),
    getBooksByCategory: builder.query({
      query: (categoryName) =>
        `/lists/current/${categoryName}.json?api-key=97gbGLZdsTWt4QPs9XZOXgw9kpAELRh2`,
      transformResponse: (response) => {
        const filteredResponse = response.results.books.filter(
          (book) => book.book_image !== null
        );
        return filteredResponse;
      },
    }),
  }),
});

export const {
  useGetFictionBooksQuery,
  useGetNonfictionBooksQuery,
  useGetBooksByCategoryQuery,
} = booksApi;
