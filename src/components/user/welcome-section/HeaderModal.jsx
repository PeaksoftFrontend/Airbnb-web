import { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, IconButton, Modal, ListItem } from "@mui/material";
import { Icons } from "../../../assets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "../../UI/Button";

export const HeaderModal = ({ showAvatarModal }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledHeader>
      <StyledIconsLogo />
      <StyledDiv>
        <StyledLink>leave an ad</StyledLink>
        {showAvatarModal ? (
          <StyledAvatarButton onClick={handleOpen} ref={anchorRef}>
            <StyledAvatarCircle>
              <StyledLetter>A</StyledLetter>
            </StyledAvatarCircle>
            <KeyboardArrowDownIcon
              sx={{ marginLeft: "-5px", fontSize: "20px", color: "#C4C4C4" }}
            />
          </StyledAvatarButton>
        ) : (
          <StyledButton variant="outlined">join us</StyledButton>
        )}
      </StyledDiv>
      <StyledModal
        open={open}
        onClose={handleClose}
        container={anchorRef.current}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ zIndex: 1000 }}
      >
        <StyledModalContent>
          <ListItem
            sx={{
              cursor: "pointer",
              color: "#646464",
            }}
          >
            Выйти
          </ListItem>
        </StyledModalContent>
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

const StyledAvatarButton = styled(IconButton)(() => ({
  borderRadius: "90%",
  color: "white",
}));

const StyledAvatarCircle = styled(Box)({
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#0298D9",
  color: "#FFFFFF",
  width: "37px",
  height: "37px",
});

const StyledLetter = styled(Box)({
  fontSize: "18px",
  fontWeight: "500",
});

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  paddingTop: theme.spacing(10),
  paddingRight: theme.spacing(2),
}));

const StyledModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "5px",
  minWidth: "100px",
  padding: theme.spacing(1),
}));
