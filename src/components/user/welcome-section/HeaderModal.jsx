import { styled } from "@mui/material/styles";
import { Button } from "../../UI/Button";

import { Icons } from "../../../assets";
import { Box } from "@mui/material";
import { AccountMenu } from "./AccountMenu";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AuthModal } from "./AuthModal";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/constants/paths";

export const HeaderModal = () => {
  const role = useSelector((state) => state.auth.role);
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleNavigate = () => {
    navigate(`${PATHS.USER.PUBLISH}`);
  };

  return (
    <>
      <StyledHeader>
        <StyledIconsLogo />
        <StyledDiv>
          <StyledLink onClick={handleNavigate}>leave an ad</StyledLink>
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
  cursor: "pointer",
});

const StyledButton = styled(Button)({ width: "196px", height: "37px" });
