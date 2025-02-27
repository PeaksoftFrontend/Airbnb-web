import { Publish } from "../../components/user/puplish/Publish";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <Publish />
      </main>
      <Footer />
    </div>
  );
};
