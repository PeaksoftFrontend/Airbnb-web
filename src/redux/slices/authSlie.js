import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const getInitialState = () => {
  const authUserCookie = Cookies.get("authUser");
  console.log(Cookies.get("authUser"));

  if (authUserCookie) {
    try {
      const userData = JSON.parse(authUserCookie);
      return {
        name: userData.name || "",
        email: userData.email || "",
        token: userData.token || null,
        role: userData.role || "GUEST",
        isAuthorized: true,
      };
    } catch (error) {
      error;
    }
  }

  return {
    name: "",
    email: "",
    token: null,
    role: "GUEST",
    isAuthorized: false,
  };
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    login: (state, action) => {
      state.isAuthorized = true;
      state.role = action.payload.role;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;

      Cookies.set("authUser", JSON.stringify(action.payload), { expires: 7 });
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.role = "GUEST";
      state.name = "";
      state.email = "";
      state.token = null;

      Cookies.remove("authUser");
    },
    refreshFromCookie: (state) => {
      const authUserCookie = Cookies.get("authUser");
      if (authUserCookie) {
        try {
          const userData = JSON.parse(authUserCookie);
          state.isAuthorized = true;
          state.role = userData.role;
          state.name = userData.name;
          state.email = userData.email;
          state.token = userData.token;
        } catch (error) {
          error;
        }
      }
    },
  },
});

export const { login, logout, refreshFromCookie } = authSlice.actions;
