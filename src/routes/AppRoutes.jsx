import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PATHS } from "../utils/constants/paths";
import { useSelector } from "react-redux";
import { UserLayout } from "../layout/user/UserLayout";
import { UserRoutes } from "./user/UserRoutes";
import { LandingPAge } from "../pages/user/LandingPAge";
import { AdminLayout } from "../layout/admin/AdminLayout";

export const AppRoutes = () => {
  const { isAuthorized, role } = useSelector((state) => state.auth);

  const pathRole = {
    ADMIN: PATHS.ADMIN.ROOT,
    USER: PATHS.USER.ROOT,
    GUEST: PATHS.GUEST.ROOT,
  };

  const router = createBrowserRouter([
    {
      path: PATHS.GUEST.ROOT,
      element: <LandingPAge />,
    },
    {
      path: PATHS.USER.ROOT,
      element: (
        <PrivateRoute
          Component={<UserLayout />}
          isAuthorized={true}
          fallBackPath={pathRole[role] || PATHS.USER.ROOT}
        />
      ),
      children: UserRoutes(),
    },
    {
      path: PATHS.ADMIN.ROOT,
      element: (
        <PrivateRoute
          Component={<AdminLayout />}
          isAuthorized={isAuthorized && role === "ADMIN"}
          fallBackPath={pathRole[role] || PATHS.ADMIN.ROOT}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
