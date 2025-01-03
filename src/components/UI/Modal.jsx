import { Modal as MuiModal, Box, styled } from "@mui/material";

export const Modal = ({ open, onClose, children }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <StyledModalBox>{children}</StyledModalBox>
    </MuiModal>
  );
};

const StyledModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "500px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  outline: "none",
});
