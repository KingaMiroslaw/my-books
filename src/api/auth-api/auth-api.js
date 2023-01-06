import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://identitytoolkit.googleapis.com/v1",
  }),
  endpoints: (builder) => ({
    getAuth: builder.query({
      query: ({email, password, returnSecureToken}) =>({
        url: "/accounts:signInWithPassword?key=AIzaSyBfk0WsVDuBu8jWI6h-OiBzVrJglx83bj0",
        method: "POST",
        body: {email, password, returnSecureToken}
      })
        
     
    }),
  }),
});

export const { useGetAuthQuery } = authApi;
