import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "Aiturgan",
    email: "",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NDA0MjM0ODgsImlhdCI6MTc0MDE2NDI4OCwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.OYM2zNpUHyvC1pqMmWcI647X6lmZS6nO4yML3jt169U",
    role: "ADMIN",
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
