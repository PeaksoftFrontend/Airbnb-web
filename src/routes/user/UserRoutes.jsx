import { Navigate } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import { PATHS } from "../../utils/constants/paths";
import { NotFoundPage } from "../../pages/user/NotFoundPage";
import { MyAnnouncement } from "../../pages/user/MyAnnouncement";
import { Profiles } from "../../pages/user/Profiles";

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
    {
      path: PATHS.USER.PROFILES_USER,
      element: (
        <PrivateRoute
          Component={<Profiles />}
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
  ];
};
