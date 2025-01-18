import { Navigate } from "react-router-dom";
import { InnerOfHotel } from "../../pages/InnerOfHotel";
import { PrivateRoute } from "../PrivateRoute";
import { PATHS } from "../../utils/constants/paths";

export const UserRoutes = () => {
  return [
    {
      path: PATHS.USER.ROOT,
      element: (
        <PrivateRoute
          Component={<Navigate to={PATHS.USER.REGIONS} />}
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
  ];
};
