export const PATHS = {
  USER: {
    ROOT: "/",
    PUBLISH: "/user/publish",
    FAVORITE_USER: "/user/favorite",
    INNER_HOTEL_OF_REGIONS: "/user/inner-hotel-of-regions",
    PROFILE_INNER_PAGE_HOTEL: "/user/inner-hotel-of-regions/:regionId",
    NOT_FOUND_OF_HOTEL: "/user/not-found",
    MY_ANNOUNCEMENT: "/user/my-announcement",
    PROFILES_USER: "/user/profiles",
  },
  ADMIN: {
    ROOT: "/admin",
    APPLICATION_ADMIN: "/admin/application",
    USERS: "/admin/users",
    USERS_DETAIL: "/admin/users/:userId",
    USERS_DETAIL_PRODUCT: "/admin/users/:userId/:userProductId",
    APPLICATION_ADMIN_PRODUCT: "/admin/application/:productId",
    USER_ADMIN_PRODUCT: "/admin/user/:productId",
    APPLICATION_ALLHOUSING: "/admin/all-housing",
  },
};
