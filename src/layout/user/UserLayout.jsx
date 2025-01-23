import { Sort } from "../../components/user/Sort";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <Sort />
      </main>
    </div>
  );
};
