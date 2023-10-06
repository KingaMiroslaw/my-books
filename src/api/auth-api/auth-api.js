import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_GOOGLE_API_URL,
  }),
  endpoints: (builder) => ({
    authUser: builder.mutation({
      query: ({ email, password, returnSecureToken }) => ({
        url: `/accounts:signInWithPassword?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        method: "POST",
        body: { email, password, returnSecureToken }
      }),
    }),
    signUpUser: builder.mutation({
      query: ({ email, password, returnSecureToken }) => ({
        url: `/accounts:signUp?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        method: "POST",
        body: { email, password, returnSecureToken }
      }),
    }),
  }),
});

export const { useAuthUserMutation, useSignUpUserMutation } = authApi;
