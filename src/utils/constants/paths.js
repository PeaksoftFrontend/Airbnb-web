export const PATHS = {
  GUEST: {
    ROOT: "/",
    LANDING_PAGE: "/landing-page",
  },
  USER: {
    ROOT: "/user",
    FAVORITE_USER: "/user/favorite",
    INNER_HOTEL_OF_REGIONS: "/user/inner-hotel-of-regions",
    NOT_FOUND_OF_HOTEL: "/user/*",
    MY_ANNOUNCEMENT: "/user/my-announcement",
    PROFILES_USER: "/user/profiles",
  },
  ADMIN: {
    ROOT: "/admin",
    APPLICATION_ADMIN: "/admin/application",
    USERS: "/admin/users",
    USERS_DETAIL: "/admin/users/:userId",
    APPLICATION_ADMIN_PRODUCT: "/admin/application/:productId",
    USER_ADMIN_PRODUCT: "/admin/user/:productId",
  },
};
