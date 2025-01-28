import { CombinedSort } from "../../components/user/sort/CombinedSort";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <CombinedSort />
      </main>
      <Footer />
    </div>
  );
};
