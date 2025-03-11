import { styled } from "@mui/material/styles";
import { Button } from "../../UI/Button";

import { Icons } from "../../../assets";
import { Box } from "@mui/material";
import { AccountMenu } from "./AccountMenu";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AuthModal } from "./AuthModal"; // Import the AuthModal

export const HeaderModal = () => {
  const role = useSelector((state) => state.auth.role);

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <StyledHeader>
        <StyledIconsLogo />
        <StyledDiv>
          <StyledLink>leave an ad</StyledLink>
          {role === "GUEST" ? (
            <StyledButton
              variant="outlined"
              onClose={handleClose}
              onClick={handleOpen}
            >
              join us
            </StyledButton>
          ) : (
            <AccountMenu />
          )}
        </StyledDiv>
      </StyledHeader>

      <AuthModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
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
  fontFamily: "Inter",
  fontSize: "18px",
  fontWeight: "500",
  color: "#FFF",
});

const StyledButton = styled(Button)({ width: "196px", height: "37px" });
