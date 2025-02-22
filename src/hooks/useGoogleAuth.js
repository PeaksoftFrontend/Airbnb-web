import { useDispatch } from "react-redux";
import { useGoogleLoginMutation } from "../redux/api/auth.servers";
import Cookies from "js-cookie";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { login } from "../redux/slices/authSlie";
import { authGoogle, provider } from "../redux/fireBase";

export const useGoogleAuth = () => {
  const dispatch = useDispatch();
  const [googleLogin] = useGoogleLoginMutation();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(authGoogle, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const response = await googleLogin({ token }).unwrap();

      dispatch(
        login({
          name: response.name,
          email: response.email,
          token: response.token,
          role: response.role || "USER",
        })
      );

      Cookies.set("authData", JSON.stringify(response), { expires: 7 });

      return response;
    } catch (err) {
      err;
      throw err;
    }
  };

  return { loginWithGoogle };
};
