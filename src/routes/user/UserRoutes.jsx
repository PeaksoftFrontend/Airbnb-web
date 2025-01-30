import { PrivateRoute } from "../PrivateRoute";
import { PATHS } from "../../utils/constants/paths";
import { Navigate } from "react-router-dom";
import { InnerHotelPage } from "../../pages/user/InnerHotelPage";

export const UserRoutes = () => {
  return [
    {
      path: PATHS.USER.ROOT,
      element: (
        <PrivateRoute
          Component={<Navigate to={PATHS.USER.PROFILE_INNER_PAGE_HOTEL} />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.PROFILE_INNER_PAGE_HOTEL,
      element: (
        <PrivateRoute
          Component={<InnerHotelPage />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
  ];
};
