import { Box, styled } from "@mui/material";
import { StyledContainer, StyledFirstTypography } from "./JoinUs";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";

export const SignIn = () => {
  return (
    <StyledContainer>
      <StyledFistBox>
        <StyledFirstTypography> Sign in</StyledFirstTypography>
        <StyledInputBox>
          <StyledInput type="text" placeholder="Login" size="small" />
          <div>
            <StyledInput type="password" placeholder="Password" size="small" />
          </div>
        </StyledInputBox>
      </StyledFistBox>
      <Button variant="outlined" sx={{ width: "414px", height: "37px" }}>
        Sign in
      </Button>
    </StyledContainer>
  );
};

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
