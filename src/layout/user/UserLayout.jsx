import { Profiles } from "../../pages/user/Profiles";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <Profiles />
      </main>
    </div>
  );
};
