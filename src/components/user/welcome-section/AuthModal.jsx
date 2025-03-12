import { Box, Container, Modal, styled, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { Icons } from "../../../assets";
import { PATHS } from "../../../utils/constants/paths";
import { login } from "../../../redux/slices/authSlie";
import { validationSignIn } from "../../../utils/constants/validation";
import { useFormik } from "formik";
import { signInWithGoogle } from "../../../redux/fireBase";
import {
  useGoogleLoginMutation,
  useLoginAdminMutation,
} from "../../../redux/api/auth.servers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
export const AuthModal = ({ modalOpen, setModalOpen }) => {
  const [adminOpen, setAdminOpen] = useState(false);
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [googleLogin] = useGoogleLoginMutation();
  const [loginAdmin] = useLoginAdminMutation();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      const token = await user.getIdToken();
      const response = await googleLogin({ token }).unwrap();

      const userData = {
        role: response || "USER",
        name: user.displayName,
        email: user.email,
        token,
      };
      dispatch(login(userData));
      Cookies.set("authUser", JSON.stringify(userData), { expires: 7 });
      setModalOpen(false);
    } catch (error) {
      setValidationError("Error during Google login. " + error);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSignIn,
    onSubmit: async (values) => {
      try {
        const response = await loginAdmin(values).unwrap();
        const userData = {
          role: response.role,
          name: response.name,
          email: response.email,
          token: response.token,
        };
        dispatch(login(userData));
        Cookies.set("authUser", JSON.stringify(userData), { expires: 7 });
        setValidationError("");
        setAdminOpen(false);
        navigate("/admin");
      } catch (err) {
        setValidationError(
          "Error: " + (err.data?.message || "Authentication failed")
        );
      }
    },
  });

  return (
    <Fragment>
      <StyledModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <StyledContainer>
          <StyleTypography>JOIN US</StyleTypography>
          <StyleBox>
            <StyledddBox>
              <StyledText>Sign in with Google to start booking!</StyledText>
              <StyleButton onClick={handleGoogleLogin}>
                {<Icons.Google />} Google
              </StyleButton>
            </StyledddBox>

            <StyledAdminLogin
              onClick={() => {
                setAdminOpen(true);
                setModalOpen(false);
              }}
            >
              Log in as admin
            </StyledAdminLogin>
          </StyleBox>
        </StyledContainer>
      </StyledModal>

      <StyledModal open={adminOpen} onClose={() => setAdminOpen(false)}>
        <StyleContainer>
          <StyleTypography>SIGN IN</StyleTypography>

          <StyledBox>
            <StyleddBox>
              <StyledInput
                type="email"
                name="email"
                placeholder="Login"
                value={formik.values.email}
                onChange={formik.handleChange}
                size="small"
              />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                size="small"
              />
            </StyleddBox>

            <StyledButton
              onClick={formik.handleSubmit}
              disabled={!formik.isValid}
              variant="outlined"
            >
              Sign in
            </StyledButton>
            {validationError && (
              <StyledErrorContainer>{validationError}</StyledErrorContainer>
            )}
          </StyledBox>
        </StyleContainer>
      </StyledModal>
    </Fragment>
  );
};

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const StyleTypography = styled(Typography)({
  fontWeight: "500",
  fontSize: "18px",
  color: "#000000",
  marginTop: "25px",
});

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: "none",
  boxShadow: theme.shadows[5],
  padding: "0 25px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "474px",
  height: "238px",
}));

const StyleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

const StyledddBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  alignItems: "center",
}));

const StyledText = styled(Typography)({
  fontWeight: "400",
  fontSize: "16px",
  color: "#828282",
});
const StyledAdminLogin = styled(Typography)(() => ({
  color: "#266BD3",
  textDecoration: "underline",
  cursor: "pointer",
}));
const StyleContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  width: "474px",
  height: "270px",
});

const StyledBox = styled(Box)({
  display: "flex",
  gap: "36px",
  flexDirection: "column",
  width: "474px",
  height: "270px",
  padding: "25px 25px",
});
const StyleddBox = styled(Box)({
  display: "flex",
  gap: "16px",
  flexDirection: "column",
});

const StyledErrorContainer = styled(Box)({ color: "red" });

const StyledInput = styled(Input)({ width: "100%" });

const StyledButton = styled(Button)({ width: "100%", height: "37px" });
const StyleButton = styled(Button)({ width: "100%" });
