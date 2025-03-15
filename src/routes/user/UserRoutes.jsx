import { Outlet } from "react-router-dom";
import { PATHS } from "../../utils/constants/paths";
import { NotFoundPage } from "../../pages/user/NotFoundPage";
import { MyAnnouncement } from "../../pages/user/MyAnnouncement";
import { Profiles } from "../../pages/user/Profiles";
import { InnerHotelPage } from "../../pages/user/InnerHotelPage";
import { PrivateAuthRouteByRole } from "../private/PrivateAuthByRole";
import { InnerOfHotel } from "../../pages/InnerOfHotel";
import { FavoritePage } from "../../pages/user/FavoritePage";
import { Publish } from "../../components/user/puplish/Publish";
import { LandingPAge } from "../../pages/user/LandingPAge";

export const UserRoutes = (role) => {
  return [
    {
      path: PATHS.USER.ROOT,
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={<LandingPAge />}
          role={role}
          roles={["USER", "GUEST"]}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
      index: true,
    },
    {
      path: PATHS.USER.MY_ANNOUNCEMENT,
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={<MyAnnouncement />}
          role={role}
          roles={["USER", "GUEST"]}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.NOT_FOUND_OF_HOTEL,
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={<NotFoundPage />}
          role={role}
          roles={["USER", "GUEST"]}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.INNER_HOTEL_OF_REGIONS,
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={<Outlet />}
          role={role}
          roles={["GUEST", "USER"]}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
      children: [
        {
          path: ":regionId",
          element: <InnerOfHotel />,
        },
        {
          path: ":regionId/:hotelId",
          element: <InnerHotelPage />,
        },
      ],
    },
    {
      path: PATHS.USER.PROFILES_USER,
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={<Profiles />}
          role={role}
          roles={["GUEST", "USER"]}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.FAVORITE_USER,
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={<FavoritePage />}
          role={role}
          roles={["USER"]}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.PUBLISH,
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={<Publish />}
          role={role}
          roles={["USER"]}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
    },
  ];
};
