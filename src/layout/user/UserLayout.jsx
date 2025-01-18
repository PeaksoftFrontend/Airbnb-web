import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
