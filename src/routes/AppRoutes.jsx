import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PATHS } from "../utils/constants/paths";
import { useSelector } from "react-redux";
import { TestAuth } from "../components/TestAuth";

export const AppRoutes = () => {
  const { isAuthorized, role } = useSelector((state) => state.auth);

  // Логика перенаправления на основе роли
  const pathRole = {
    ADMIN: PATHS.ADMIN.ROOT,
    USER: PATHS.USER.ROOT,
    GUEST: PATHS.GUEST.ROOT,
  };

  const router = createBrowserRouter([
    // Перенаправление с корневого пути на TestAuth
    {
      path: PATHS.HOME,
      element: <Navigate to={PATHS.TEST_AUTH} replace />,
    },
    {
      path: PATHS.TEST_AUTH,
      element: <TestAuth />, // Компонент TestAuth всегда отображается первым
    },
    {
      path: PATHS.GUEST.ROOT,
      element: (
        <PrivateRoute
          Component={<h1>Guest</h1>}
          isAuthorized={isAuthorized && role === "GUEST"}
          fallBackPath={pathRole[role] || PATHS.TEST_AUTH}
        />
      ),
    },
    {
      path: PATHS.USER.ROOT,
      element: (
        <PrivateRoute
          Component={<h1>User</h1>}
          isAuthorized={isAuthorized && role === "USER"}
          fallBackPath={pathRole[role] || PATHS.TEST_AUTH}
        />
      ),
    },
    {
      path: PATHS.ADMIN.ROOT,
      element: (
        <PrivateRoute
          Component={<h1>Admin</h1>}
          isAuthorized={isAuthorized && role === "ADMIN"}
          fallBackPath={pathRole[role] || PATHS.TEST_AUTH}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
