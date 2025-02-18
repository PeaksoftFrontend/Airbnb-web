export const PATHS = {
  GUEST: {
    ROOT: "/",
    LANDING_PAGE: "/landing-page",
  },
  USER: {
    ROOT: "/user",
    FAVORITE_USER: "/user/favorite",
    INNER_HOTEL_OF_REGIONS: "/user/inner-hotel-of-regions/*",
    PROFILE_INNER_PAGE_HOTEL: "/user/inner-hotel-of-regions/:hotelId",
    MY_ANNOUNCEMENT: "/user/my-announcement",
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
