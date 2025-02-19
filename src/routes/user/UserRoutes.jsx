import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoute } from "../private/PrivateRoute";
import { PATHS } from "../../utils/constants/paths";
import { NotFoundPage } from "../../pages/user/NotFoundPage";
import { MyAnnouncement } from "../../pages/user/MyAnnouncement";
import { Profiles } from "../../pages/user/Profiles";
import { InnerHotelPage } from "../../pages/user/InnerHotelPage";

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
      path: PATHS.USER.INNER_HOTEL_OF_REGIONS,
      element: (
        <PrivateRoute
          Component={
            <h1>
              <Outlet />
            </h1>
          }
          isAuthorized={true}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
      children: [
        {
          path: ":hotelId",
          element: (
            <PrivateRoute
              Component={<InnerHotelPage />}
              isAuthorized={true}
              fallBackPath={PATHS.USER.ROOT}
            />
          ),
        },
      ],
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
