import { createSlice } from "@reduxjs/toolkit";

// Load token from local storage
const token = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: token || null,
    isAuthenticated: !!token,
    user: null, // Will store user details after login
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const authSelector = (state) => state.auth;
export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
