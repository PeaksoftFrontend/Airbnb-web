export const PATHS = {
  GUEST: {
    ROOT: "/",
  },
  USER: {
    ROOT: "/user",
    FAVORITE_USER: "/user/favorite",
    INNER_HOTEL_OF_REGIONS: "/user/inner-hotel-of-regions",
    NOT_FOUND_OF_HOTEL: "/user/*",
    MY_ANNOUNCEMENT: "/user/my-announcement",
  },
  ADMIN: {
    ROOT: "/admin",
    APPLICATION_ADMIN: "/admin/application",
    USER_ADMIN_PRODUCT: "/admin/user/:productId",
  },
};
