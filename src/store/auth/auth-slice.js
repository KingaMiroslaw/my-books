import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, userInfo: null, isAuthenticated: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.idToken;
      state.userInfo = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setAuthUser, logout } = authSlice.actions;

export default authSlice.reducer;
