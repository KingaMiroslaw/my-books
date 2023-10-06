import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BOOKS_API_URL,
  }),
  endpoints: (builder) => ({
    getFictionBooks: builder.query({
      query: () =>
        `/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`,
      transformResponse: (response) => {
        const filteredResponse = response.results.books.filter(
          (book) => book.book_image !== null
        );
        return filteredResponse;
      },
    }),
    getNonfictionBooks: builder.query({
      query: () =>
        `/lists/current/hardcover-nonfiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`,
      transformResponse: (response) => {
        const filteredResponse = response.results.books.filter(
          (book) => book.book_image !== null
        );
        return filteredResponse;
      },
    }),
    getBooksByCategory: builder.query({
      query: (categoryName) =>
        `/lists/current/${categoryName}.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`,
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
