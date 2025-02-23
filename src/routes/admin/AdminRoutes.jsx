import { Navigate } from "react-router-dom";
import { PATHS } from "../../utils/constants/paths";
import { PrivateRoute } from "../private/PrivateRoute";
import { ProductDetail } from "../../pages/admin/ProductDetail";
import { Application } from "../../pages/admin/Application";
import { AllHousingPage } from "../../pages/admin/AllHousingPage";
import { UserDetail } from "../../pages/admin/UserDetail";

export const AdminRoutes = () => {
  return [
    {
      path: PATHS.ADMIN.ROOT,
      element: (
        <PrivateRoute
          Component={<Navigate to={PATHS.ADMIN.APPLICATION_ADMIN} />}
          isAuthorized={true}
          fallBackPath={PATHS.ADMIN.ROOT}
        />
      ),
    },
    {
      path: PATHS.ADMIN.APPLICATION_ADMIN,
      element: (
        <PrivateRoute
          Component={<Application />}
          isAuthorized={true}
          fallBackPath={PATHS.ADMIN.ROOT}
        />
      ),
    },
    {
      path: PATHS.ADMIN.USERS_DETAIL,
      element: (
        <PrivateRoute
          Component={<UserDetail />}
          isAuthorized={true}
          fallBackPath={PATHS.ADMIN.ROOT}
        />
      ),
    },
    {
      path: PATHS.ADMIN.APPLICATION_ADMIN_PRODUCT,
      element: (
        <PrivateRoute
          Component={<ProductDetail />}
          isAuthorized={true}
          fallBackPath={PATHS.ADMIN.ROOT}
        />
      ),
    },
    {
      path: PATHS.ADMIN.APPLICATION_ALLHOUSING,
      element: (
        <PrivateRoute
          Component={<AllHousingPage />}
          isAuthorized={true}
          fallBackPath={PATHS.ADMIN.ROOT}
        />
      ),
    },
  ];
};
