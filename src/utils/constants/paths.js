export const PATHS = {
  GUEST: {
    ROOT: "/",
  },
  USER: {
    ROOT: "/",
    FAVORITE_USER: "/favorite",
    INNER_HOTEL_OF_REGIONS: "/inner-hotel-of-regions",
    PROFILE_INNER_PAGE_HOTEL: "/inner-hotel-of-regions/:regionId",
    MY_ANNOUNCEMENT: "/my-announcement",
    PROFILES_USER: "/profiles",
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
