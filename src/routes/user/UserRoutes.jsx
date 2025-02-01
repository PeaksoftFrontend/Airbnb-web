import { Navigate } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import { PATHS } from "../../utils/constants/paths";
import { InFavorites } from "../../components/user/InFavorites";
import { NotFoundPage } from "../../pages/user/NotFoundPage";

export const UserRoutes = () => {
  return [
    {
      path: PATHS.USER.ROOT,
      element: (
        <PrivateRoute
          Component={<Navigate to={PATHS.USER.NOT_FOUND_OF_HOTEL} />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.INFAVORITES,
      element: (
        <PrivateRoute
          Component={<InFavorites />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.NOT_FOUND_OF_HOTEL,
      element: (
        <PrivateRoute
          Component={<NotFoundPage />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
  ];
};
