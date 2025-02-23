import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoute } from "./private/PrivateRoute";
import { PATHS } from "../utils/constants/paths";
import { useSelector } from "react-redux";
import { UserRoutes } from "./user/UserRoutes";
import { UserLayout } from "../layout/user/UserLayout";
import { AdminLayout } from "../layout/admin/AdminLayout";
import { AdminRoutes } from "./admin/AdminRoutes";
import { LandingPAge } from "../pages/user/LandingPAge";

export const AppRoutes = () => {
  const { isAuthorized, role } = useSelector((state) => state.auth);
  console.log(isAuthorized, role);

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
          isAuthorized={isAuthorized && role === "USER"}
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
      children: AdminRoutes(),
    },
  ]);

  return <RouterProvider router={router} />;
};
