import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "Aiturgan",
    email: "",
    token: null,
    role: "USER",
    isAuthorized: true,
  },

  reducers: {
    login: (state, action) => {
      state.isAuthorized = true;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.role = "USER";
    },
  },
});

export const { login, logout } = authSlice.actions;
