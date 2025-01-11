import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component, isAuthorized, fallBackPath }) => {
  if (!isAuthorized) {
    return <Navigate to={fallBackPath} />;
  }
  console.log(PrivateRoute);

  return Component;
};
