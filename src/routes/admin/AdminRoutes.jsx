import { Navigate } from "react-router-dom";
import { PATHS } from "../../utils/constants/paths";
import { PrivateRoute } from "../PrivateRoute";
import { AllHousingPage } from "../../pages/admin/AllHousingPage";

export const AdminRoutes = () => {
  return [
    {
      path: PATHS.ADMIN.ROOT,
      element: (
        <PrivateRoute
          Component={<Navigate to={PATHS.ADMIN.ALL_HOUSING_ADMIN} />}
          isAuthorized={true}
          fallBackPath={PATHS.ADMIN.ROOT}
        />
      ),
    },
    {
      path: PATHS.ADMIN.ALL_HOUSING_ADMIN,
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
