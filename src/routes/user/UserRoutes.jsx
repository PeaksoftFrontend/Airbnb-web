import { Navigate } from "react-router-dom";
import { InnerOfHotel } from "../../pages/InnerOfHotel";
import { PrivateRoute } from "../PrivateRoute";
import { PATHS } from "../../utils/constants/paths";
import { FavoritePage } from "../../pages/user/FavoritePage";

export const UserRoutes = () => {
  return [
    {
      path: PATHS.USER.ROOT,
      element: (
        <PrivateRoute
          Component={<Navigate to={PATHS.USER.INNER_HOTEL_OF_REGIONS} />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.INNER_HOTEL_OF_REGIONS,
      element: (
        <PrivateRoute
          Component={<InnerOfHotel />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.FAVORITE_USER,
      element: (
        <PrivateRoute
          Component={<FavoritePage />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
  ];
};
