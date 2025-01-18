import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PATHS } from "../utils/constants/paths";
import { useSelector } from "react-redux";
import { AllHousingPage } from "../pages/admin/AllHousingPage";
import { FavoritePage } from "../pages/user/FavoritePage";

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
      element: (
        <PrivateRoute
          Component={<h1>Guest</h1>}
          isAuthorized={role === "GUEST"}
          fallBackPath={pathRole[role] || PATHS.GUEST.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.ROOT,
      element: (
        <PrivateRoute
          Component={<FavoritePage />}
          isAuthorized={isAuthorized && role === "USER"}
          fallBackPath={pathRole[role] || PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.ADMIN.ROOT,
      element: (
        <PrivateRoute
          Component={<AllHousingPage />}
          isAuthorized={isAuthorized && role === "ADMIN"}
          fallBackPath={pathRole[role] || PATHS.ADMIN.ROOT}
        />
      ),
      children: AdminRoutes(),
    },
  ]);

  return <RouterProvider router={router} />;
};
