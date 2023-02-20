import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformEmail } from "../../utils/utils";

export const favoritesBooksApi = createApi({
  reducerPath: "favoritesBooksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-books-a5049-default-rtdb.firebaseio.com",
  }),
  endpoints: (builder) => ({
    addFavoriteBookItem: builder.mutation({
      query: ({ email, book }) => ({
        url: `/favorites-books/${transformEmail(email)}.json`,
        method: "POST",
        body: book,
      }),
    }),
  }),
});

export const { useAddFavoriteBookItemMutation } = favoritesBooksApi;
