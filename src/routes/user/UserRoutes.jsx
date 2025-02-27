import { Outlet } from "react-router-dom";
import { PATHS } from "../../utils/constants/paths";
import { NotFoundPage } from "../../pages/user/NotFoundPage";
import { MyAnnouncement } from "../../pages/user/MyAnnouncement";
import { Profiles } from "../../pages/user/Profiles";
import { InnerHotelPage } from "../../pages/user/InnerHotelPage";
import { LandingPAge } from "../../pages/user/LandingPAge";
import { PrivateAuthRouteByRole } from "../private/PrivateAuthByRole";
import { InnerOfHotel } from "../../pages/InnerOfHotel";

export const UserRoutes = (role) => {
  return [
    {
      index: true,
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={<LandingPAge />}
          role={role}
          roles={["USER", "GUEST"]}
          fallBackPath={PATHS.GUEST.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.MY_ANNOUNCEMENT,
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={<MyAnnouncement />}
          role={role}
          roles={["USER", "GUEST"]}
          fallBackPath={PATHS.GUEST.ROOT}
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
          fallBackPath={PATHS.GUEST.ROOT}
        />
      ),
    },
    {
      path: PATHS.USER.INNER_HOTEL_OF_REGIONS,
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={
            <h1>
              <Outlet />
            </h1>
          }
          role={role}
          roles={["GUEST", "USER"]}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
      children: [
        {
          path: ":regionId",
          element: (
            <PrivateAuthRouteByRole
              RouteComponent={<InnerOfHotel />}
              role={role}
              roles={["GUEST", "USER"]}
              fallBackPath={PATHS.USER.ROOT}
            />
          ),
        },
      ],
    },
    {
      path: "/user/inner-hotel-of-regions/:regionId/:hotelId",
      element: (
        <PrivateAuthRouteByRole
          RouteComponent={<InnerHotelPage />}
          role={role}
          roles={["GUEST", "USER"]}
          fallBackPath={PATHS.USER.ROOT}
        />
      ),
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
  ];
};
