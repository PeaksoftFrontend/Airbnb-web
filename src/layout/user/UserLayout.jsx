import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { DatePickers } from "../../components/UI/DatePickers";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <DatePickers />
      </main>
    </div>
  );
};
