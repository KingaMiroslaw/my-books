import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://identitytoolkit.googleapis.com/v1",
  }),
  endpoints: (builder) => ({
    authUser: builder.mutation({
      query: ({ email, password, returnSecureToken }) => ({
        url: "/accounts:signInWithPassword?key=AIzaSyBfk0WsVDuBu8jWI6h-OiBzVrJglx83bj0",
        method: "POST",
        body: { email, password, returnSecureToken }
      }),
    }),
    signUpUser: builder.mutation({
      query: ({ email, password, returnSecureToken }) => ({
        url: "/accounts:signUp?key=AIzaSyBfk0WsVDuBu8jWI6h-OiBzVrJglx83bj0",
        method: "POST",
        body: { email, password, returnSecureToken }
      }),
    }),
  }),
});

export const { useAuthUserMutation, useSignUpUserMutation } = authApi;
