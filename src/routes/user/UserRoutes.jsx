import { Navigate } from "react-router-dom";
import { InnerOfHotel } from "../../pages/InnerOfHotel";
import { PrivateRoute } from "../PrivateRoute";
import { PATHS } from "../../utils/constants/paths";
import { InFavorites } from "../../components/user/InFavorites";
import { MyAnnouncement } from "../../pages/user/MyAnnouncement";

export const UserRoutes = () => {
  return [
    {
      path: PATHS.USER.ROOT,
      element: (
        <PrivateRoute
          Component={<Navigate to={PATHS.USER.MY_ANNOUNCEMENT} />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.MY_ANNOUNCEMENT,
      element: (
        <PrivateRoute
          Component={<MyAnnouncement />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
  ];
};
