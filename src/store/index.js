import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/auth-api/auth-api";
import { booksApi } from "../api/books-api/books-api";
import { favoritesBooksApi } from "../api/favorites-books-api/favorites-books-api";
import authReducer from "./auth/auth-slice";

export default configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [favoritesBooksApi.reducerPath]: favoritesBooksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      booksApi.middleware,
      favoritesBooksApi.middleware
    ),
});
