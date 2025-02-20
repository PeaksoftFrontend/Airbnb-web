import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "../../UI/Button";
import { Modal } from "../../UI/Modal";
import { Icons } from "../../../assets";
import { Input } from "../../UI/Input";
import { Box, Typography } from "@mui/material";
import { AccountMenu } from "./AccountMenu";
import { useSelector } from "react-redux";
import { useGoogleLogin } from "../../../hooks/useGoogleLogin";
import { validationSignIn } from "../../../utils/constants/validation";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../redux/slices/authSlie";

export const HeaderModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const { signIn } = useGoogleLogin();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleLogin = async () => {
    try {
      await validationSignIn.validate({ email, password });
      setValidationError("");
      const result = await login({ email, password });
      if (result.data) {
        navigate("/admin");
      }
    } catch (err) {
      setValidationError(err.message);
    }
  };

  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  const handleAdminOpen = () => {
    setAdminOpen(true);
  };
  const handleAdminClose = () => {
    setAdminOpen(false);
  };

  const role = useSelector((state) => state.auth.role);

  return (
    <StyledHeader>
      <StyledIconsLogo />
      <StyledDiv>
        <StyledLink>leave an ad</StyledLink>
        {role === "ADMIN" ? (
          <StyledButton variant="outlined" onClick={handleOpen}>
            join us
          </StyledButton>
        ) : (
          <AccountMenu />
        )}
      </StyledDiv>

      <StyledModal open={modalOpen} onClose={handleClose}>
        <StyledBox>
          <StyledFirstTypography variant="h6">JOIN US</StyledFirstTypography>
          <StyledTypography variant="body1">
            Sign in with OpenAI to start booking available listings!
          </StyledTypography>

          <StyledGoogleButton
            variant="contained"
            color="primary"
            fullWidth
            onClick={signIn}
          >
            {<Icons.Google />} Google
          </StyledGoogleButton>
          <StyledModalTypography variant="body2" onClick={handleAdminOpen}>
            Log in as admin
          </StyledModalTypography>
        </StyledBox>
      </StyledModal>
      <StyledModal open={adminOpen} onClose={handleAdminClose}>
        <StyledBox>
          <StyledFistBox>
            <StyledFirstTypography> Sign in</StyledFirstTypography>
            <StyledInputBox>
              <InputWrapper>
                <StyledInput
                  type="text"
                  placeholder="Login"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {validationError && (
                  <StyledErrorContainer>{validationError}</StyledErrorContainer>
                )}
              </InputWrapper>

              <InputWrapper>
                <StyledInput
                  type="password"
                  placeholder="Password"
                  size="small"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {validationError && (
                  <StyledErrorContainer>{validationError}</StyledErrorContainer>
                )}
              </InputWrapper>
            </StyledInputBox>
          </StyledFistBox>

          <Button
            variant="outlined"
            sx={{ width: "414px", height: "37px" }}
            onClick={handleLogin}
          >
            Sign in
          </Button>
        </StyledBox>
      </StyledModal>
    </StyledHeader>
  );
};

const StyledErrorContainer = styled(Box)({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  fontSize: "14px",
  color: "red",
  textAlign: "left",
  minHeight: "20px",
  display: "flex",
  alignItems: "center",
});

const InputWrapper = styled(Box)({
  position: "relative",
  width: "414px",
});

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));
const StyledIconsLogo = styled(Icons.Logo)(({ iconSize }) => ({
  width: iconSize?.width || "88px",
  height: iconSize?.height || "100%",
  cursor: "pointer",
}));
const StyledDiv = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

const StyledLink = styled(Box)({
  fontfamily: "Inter",
  fontSize: "18px",
  fontWeight: "500",
  color: "#FFF",
});

const StyledButton = styled(Button)({
  width: "196px",
  height: "37px",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
  width: "474px",
  height: "240px",
});
export const StyledFirstTypography = styled(Typography)({
  fontSize: "18px",
  fontWeight: "500",
  color: "#000000",
  textTransform: "uppercase",
});
const StyledTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  color: "#828282",
});
const StyledGoogleButton = styled(Button)({
  width: "424px",
  height: "50px",
  textTransform: "capitalize",
  fontSize: "18px",
  fontWeight: "500",
  color: "#000000",
  display: "flex",
  gap: "16px",
});
const StyledModalTypography = styled(Typography)({
  fontSize: "14px",
  fontWeight: "400",
  color: "#266BD3",
  textDecoration: "underline ",
  cursor: "pointer",
});

export const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "36px",
  backgroundColor: theme.palette.primary.main,
}));
const StyledFistBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  justifyContent: "center",
  alignItems: "center",
});
const StyledInputBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
const StyledInput = styled(Input)({
  width: "414px",
  lineHeight: "39px",
  color: "#C4C4C4",
});
