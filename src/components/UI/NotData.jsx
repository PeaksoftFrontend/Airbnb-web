import { Box, styled } from "@mui/material";

export const NoData = ({ message }) => (
  <StyledNoDataMessage>{message}</StyledNoDataMessage>
);

const StyledNoDataMessage = styled(Box)({
  textAlign: "center",
  padding: "20px",
  fontSize: "18px",
  color: "#888",
});
