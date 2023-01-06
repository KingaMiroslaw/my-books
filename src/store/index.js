import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/auth-api/auth-api";
import authReducer from "./auth/auth-slice"

export default configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
