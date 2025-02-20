import { useDispatch } from "react-redux";
import { login, useGoogleLoginMutation } from "../redux/slices/authSlie";
import { signInWithPopup } from "firebase/auth";
import { authGoogle, provider } from "../redux/fireBase";
import Cookies from "js-cookie";
export const useGoogleLogin = () => {
  const dispatch = useDispatch();
  const [loginGoogle] = useGoogleLoginMutation();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(authGoogle, provider);
      const token = await result.user.getIdToken();

      const response = await loginGoogle(token).unwrap();
      Cookies.set("authToken", response.token, { expires: 7 });

      dispatch(
        login({
          token: response.token,
          role: response.role,
        })
      );

      return response;
    } catch (error) {
      error;
    }
  };
  return { signIn };
};
