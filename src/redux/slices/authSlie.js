import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    email: "",
    token: null,
    role: "GUEST",
    isAuthorized: false,
  },

  reducers: {
    login: (state, action) => {
      state.isAuthorized = true;
      state.role = action.payload.role;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.role = "GUEST";
      state.name = "";
      state.email = "";
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
