import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "Aiturgan",
    email: "",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NDAwNjE2OTUsImlhdCI6MTczOTgwMjQ5NSwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.jDIYRC4_AAibgRYcbwKaa_QUhNTEB7Oc45UQC9UlhyM",
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
