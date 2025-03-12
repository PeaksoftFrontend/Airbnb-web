import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet, useLocation } from "react-router-dom";

export const UserLayout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" ? null : <Header />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
