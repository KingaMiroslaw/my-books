import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformEmail } from "../../utils/utils";

export const favoritesBooksApi = createApi({
  reducerPath: "favoritesBooksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-books-a5049-default-rtdb.firebaseio.com",
  }),
  endpoints: (builder) => ({
    getFavoriteBookItem: builder.query({
      query: ({ email }) => `/favorites-books/${transformEmail(email)}.json`,
      transformResponse: (response) => {
        const array = [];

        if (response !== null) {
          for (const key in response) {
            array.push({
              id: key,
              author: response[key].author,
              title: response[key].title,
              publisher: response[key].publisher,
              description: response[key].description,
              picture: response[key].book_image,
            });
          }
        }
        return array;
      },
    }),
    addFavoriteBookItem: builder.mutation({
      query: ({ email, book }) => ({
        url: `/favorites-books/${transformEmail(email)}.json`,
        method: "POST",
        body: book,
      }),
    }),
    deleteFavoriteBookItem: builder.mutation({
      query: ({ email, id }) => ({
        url: `/favorites-books/${transformEmail(email)}/${id}.json`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetFavoriteBookItemQuery,
  useAddFavoriteBookItemMutation,
  useDeleteFavoriteBookItemMutation,
} = favoritesBooksApi;
