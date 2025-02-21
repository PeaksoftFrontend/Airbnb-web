import { Navigate } from "react-router-dom";
import { PATHS } from "../../utils/constants/paths";
import { PrivateRoute } from "../private/PrivateRoute";
// import { ProductDetail } from "../../pages/admin/ProductDetail";
import { Application } from "../../pages/admin/Application";
import { AllHousingPage } from "../../pages/admin/AllHousingPage";
import { UserDetail } from "../../pages/admin/UserDetail";
import { UsersPage } from "../../pages/admin/UsersPage";

export const AdminRoutes = () => {
  return [
    {
      path: PATHS.ADMIN.ROOT,
      element: (
        <PrivateRoute
          Component={Navigate}
          to={PATHS.ADMIN.USERS}
          isAuthorized={true}
          fallBackPath={PATHS.ADMIN.ROOT}
        />
      ),
    },
    {
      path: PATHS.ADMIN.USERS,
      element: (
        <PrivateRoute
          Component={UsersPage}
          isAuthorized={true}
          fallBackPath={PATHS.ADMIN.ROOT}
        />
      ),
    },
 
    {
      path: PATHS.ADMIN.USERS_DETAIL,
      element: (
        <PrivateRoute
          Component={UserDetail}
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
