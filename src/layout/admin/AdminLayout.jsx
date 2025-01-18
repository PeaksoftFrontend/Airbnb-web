import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const AdminLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
