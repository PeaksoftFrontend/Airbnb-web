import { Modal as MuiModal, Box, styled } from "@mui/material";
import React from "react";

const Modal = ({ open, onClose, children }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <StyledModalBox>{children}</StyledModalBox>
    </MuiModal>
  );
};

export default Modal;

const StyledModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  padding: "16px",
  outline: "none",
});
