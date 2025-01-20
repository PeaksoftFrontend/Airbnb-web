import { ModalFeedback } from "../../components/user/ModalFeedback";
// import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <ModalFeedback />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
