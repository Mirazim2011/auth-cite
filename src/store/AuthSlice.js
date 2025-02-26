import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    loginFn: (state) => {
      state.isLoggedIn = true;
    },
    logOutFn: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export const authAction = authSlice.actions;

export default authSlice;
