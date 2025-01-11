import { Box, styled, Typography } from "@mui/material";

export const BookedCard = ({ booked }) => {
  return (
    <>
      {booked.map((item) => (
        <StyledBox key={item.id}>
          <StyledTypography>
            <StyledSpanPrice>{item.price}/</StyledSpanPrice>
            <StyledSpanDay>{item.day}</StyledSpanDay>
          </StyledTypography>
          <StyledBorder></StyledBorder>
          <StyledCheckBox>
            <StyledBoxCheck>
              <StyledTypographyCheck>Check in</StyledTypographyCheck>
              <StyledTypographyArray>{item.checkInDate}</StyledTypographyArray>
            </StyledBoxCheck>
            <StyledBoxCheck>
              <StyledTypographyCheck>Check out</StyledTypographyCheck>
              <StyledTypographyArray>{item.checkOutDate}</StyledTypographyArray>
            </StyledBoxCheck>
          </StyledCheckBox>
        </StyledBox>
      ))}
    </>
  );
};
const StyledBorder = styled("div")({ borderBottom: "1px solid #C4C4C4" });
const StyledBox = styled(Box)({
  display: "flex",
  gap: "20px",
  flexDirection: "column",
  width: "400px",
  height: "157px",
  padding: "20px",
  backgroundColor: "#FFFFFF",
});
const StyledTypography = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
});
const StyledSpanPrice = styled("span")({
  fontFamily: "Inter",
  fontSize: "20px",
  fontWeight: "400",
  color: "#000000",
});

const StyledSpanDay = styled("span")({
  fontFamily: "Inter",
  fontSize: "18px",
  fontWeight: "400",
  color: "#6C6C6C",
});

const StyledCheckBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "10rem",
});

const StyledBoxCheck = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

const StyledTypographyCheck = styled(Typography)({
  fontSize: "14px",
  fontWeight: "400",
  color: "#646464",
});
const StyledTypographyArray = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  color: "#363636",
});
