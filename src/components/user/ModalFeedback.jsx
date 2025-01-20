import { Box, styled, Typography } from "@mui/material";
import { Button } from "../../components/UI/Button";
import { useState } from "react";
import { Modal } from "../UI/Modal";

export const ModalFeedback = () => {
  const [open, setOpen] = useState(false);

  const handleOpenClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <StyledButton variant="outlined" onClick={handleOpenClick}>
        request to book
      </StyledButton>
      <Modal open={open} onClose={handleOpenClick}>
        <StyledModal>
          <StyledTitle>Leave feedback</StyledTitle>
          <div></div>
        </StyledModal>
      </Modal>
    </Box>
  );
};

const StyledButton = styled(Button)({ width: "423px", height: "37px" });
const StyledModal = styled(Box)({
  width: "720px",
  height: "463px",
  display: "flex",
  gap: "20px",
  justifyContent: "center",
});
const StyledTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "500",
  color: "#363636",
  textTransform: "uppercase",
  margin: "25px",
});
