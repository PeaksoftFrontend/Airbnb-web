import { FavoritePage } from "../../pages/user/FavoritePage";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useLocation } from "react-router-dom";

export const UserLayout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" ? null : <Header />}
      <main>
        {/* <Outlet /> */}
        <FavoritePage />
      </main>
      <Footer />
    </div>
  );
};
