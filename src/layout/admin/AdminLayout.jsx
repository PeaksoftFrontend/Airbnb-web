import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ProductDetail } from "../../pages/admin/ProductDetail";
import { UsersPage } from "../../pages/admin/UsersPage";

export const AdminLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <UsersPage />
      </main>
    </div>
  );
};
