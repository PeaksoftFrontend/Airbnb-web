import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "../../UI/Button";
import { Modal } from "../../UI/Modal";
import { Icons } from "../../../assets";
import { Input } from "../../UI/Input";
import { Box, Typography } from "@mui/material";
import { AccountMenu } from "./AccountMenu";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLoginMutation } from "../../../redux/slices/authSlie";
import { authGoogle, provider } from "../../../redux/fireBase";
import { showToast } from "../../../utils/helpers/showToast";
import { setUserRole } from "../../../redux/slices/authSlie";

export const HeaderModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const dispatch = useDispatch();
  const [googleLogin] = useGoogleLoginMutation();
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
  const handleGoogleLogin = async () => {
    try {
      const result = await authGoogle.signInWithPopup(provider);
      const token = await result.user.getIdToken();

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      const expires = expirationDate.toUTCString();

      document.cookie = `token=${token}; path=/; expires=${expires}; secure; `;

      const response = await googleLogin(token).unwrap();

      console.log(response, "жопа");

      if (response.success) {
        showToast.success("Успешно!!!");
        location.href = "/profile";
        dispatch(setUserRole("USER"));
      } else {
        showToast.error("Ошибка авторизации: " + response.message);
      }
    } catch (error) {
      showToast.error(
        "Ошибка входа: " + (error.message || "Неизвестная ошибка")
      );
    }
  };

  return (
    <StyledHeader>
      <StyledIconsLogo />
      <StyledDiv>
        <StyledLink>leave an ad</StyledLink>
        {role === "GUEST" ? (
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
            onClick={() => {
              handleGoogleLogin;
            }}
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
              <StyledInput type="text" placeholder="Login" size="small" />
              <div>
                <StyledInput
                  type="password"
                  placeholder="Password"
                  size="small"
                />
              </div>
            </StyledInputBox>
          </StyledFistBox>
          <Button variant="outlined" sx={{ width: "414px", height: "37px" }}>
            Sign in
          </Button>
        </StyledBox>
      </StyledModal>
    </StyledHeader>
  );
};

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
  gap: "24px",
  justifyContent: "center",
  alignItems: "center",
});
const StyledInputBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
const StyledInput = styled(Input)({
  width: "414px",
  lineHeight: "39px",
  color: "#C4C4C4",
});
