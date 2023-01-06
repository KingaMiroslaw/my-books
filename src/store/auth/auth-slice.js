import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, isAuthenticated: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    // decrementByAmount: (state, action) => {
    //   state.value -= action.payload;
    // },
    // clear: (state) => {
    //   return initialState;
    // },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
