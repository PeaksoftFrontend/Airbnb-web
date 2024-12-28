import { Box, Container, styled, Typography } from "@mui/material";
import { Button } from "../../UI/Button";
import { Icons } from "../../../assets";

export const JoinUs = () => {
  return (
    <StyledContainer>
      <StyledBox>
        <StyledFirstTypography variant="h5">Join us</StyledFirstTypography>
        <StyledTypography variant="h7">
          Sign in with Google to start booking available listings!
        </StyledTypography>
        <StyledButton variant="contained">
          {<Icons.Google />} Google
        </StyledButton>
      </StyledBox>

      <StyledTagA href="#">log in as admin</StyledTagA>
    </StyledContainer>
  );
};

export const StyledContainer = styled(Container)({
  width: "474px",
  height: "240px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "36px",
  backgroundColor: "#FFFFFF",
  marginTop: "13rem",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
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
const StyledButton = styled(Button)({
  width: "424px",
  height: "50px",
  textTransform: "capitalize",
  fontSize: "18px",
  fontWeight: "500",
  color: "#000000",
  display: "flex",
  gap: "16px",
});
const StyledTagA = styled("a")({
  fontSize: "14px",
  fontWeight: "400",
  color: "#266BD3",
});
