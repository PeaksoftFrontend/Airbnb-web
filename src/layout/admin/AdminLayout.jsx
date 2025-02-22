// import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ProductDetail } from "../../pages/admin/ProductDetail";
import { UsersPage } from "../../pages/admin/UsersPage";
import { UserDetail } from "../../pages/admin/UserDetail";
import { Profile } from "../../components/admin/Profile";
import { Outlet } from "react-router-dom";
import { Footer } from "../user/Footer";

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
