export const PATHS = {
  GUEST: {
    ROOT: "/",
  },
  USER: {
    ROOT: "/user",
    FAVORITE_USER: "/user/favorite",
    INNER_HOTEL_OF_REGIONS: "/user/inner-hotel-of-regions",
    NOT_FOUND_OF_HOTEL: "/user/*",
  },
  ADMIN: {
    ROOT: "/admin",
    APPLICATION_ADMIN: "/admin/application",
    APPLICATION_ADMIN_PRODUCT: "/admin/application/:productId",
  },
};
